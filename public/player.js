const player = document.querySelector('[data-player]');

if (player) {
  const play = player.querySelector('[data-play]');
  const retry = player.querySelector('[data-retry]');
  const restart = player.querySelector('[data-restart]');
  const expand = player.querySelector('[data-fullscreen]');
  const expandText = player.querySelector('[data-fullscreen-text]');
  const status = player.querySelector('[data-game-status]');
  const mount = player.querySelector('[data-frame-mount]');
  const loading = player.querySelector('[data-loading-msg]');
  const timeout = player.querySelector('[data-timeout-msg]');
  const recovery = player.querySelector('[data-recovery]');
  const mobilePlayer = window.matchMedia('(pointer: coarse) and (max-width: 720px), (pointer: coarse) and (max-width: 1000px) and (max-height: 600px)');
  const outside = document.querySelectorAll('.skip-link, .site-header, .site-footer, .reading-surface');
  let frame;
  let timer;
  let attempts = 0;

  play.hidden = false;
  restart.hidden = false;
  expand.hidden = false;

  function report(name, data = {}) {
    player.dispatchEvent(new CustomEvent('mottle:player', {
      bubbles: true,
      detail: { name, ...data },
    }));
  }

  function setState(state) {
    player.dataset.state = state;
    play.hidden = state !== 'idle';
    status.hidden = state === 'idle' || state === 'loaded';
    loading.hidden = state !== 'loading';
    timeout.hidden = state !== 'timeout';
    recovery.hidden = state !== 'timeout';
    restart.disabled = state === 'idle' || state === 'loading';
    mount.inert = state !== 'loaded';
  }

  function loadGame() {
    window.clearTimeout(timer);
    const currentAttempt = ++attempts;
    const moveFocus = [play, retry, expand].includes(document.activeElement);
    const started = performance.now();
    frame = document.createElement('iframe');
    const currentFrame = frame;
    currentFrame.title = player.dataset.frameTitle;
    currentFrame.allow = 'autoplay; fullscreen';
    currentFrame.allowFullscreen = true;
    currentFrame.referrerPolicy = 'strict-origin-when-cross-origin';
    currentFrame.src = player.dataset.src;
    setState('loading');
    if (moveFocus) expand.focus({ preventScroll: true });
    currentFrame.addEventListener('load', () => {
      if (currentFrame !== frame) return;
      window.clearTimeout(timer);
      const enterFromPlayer = document.activeElement === expand || document.activeElement === retry;
      setState('loaded');
      if (moveFocus && enterFromPlayer) currentFrame.focus({ preventScroll: true });
      // A cross-origin navigation can dispatch load even when gameplay is unavailable.
      report('game_frame_loaded', { attempt: currentAttempt, load_ms: Math.round(performance.now() - started) });
    }, { once: true });
    mount.replaceChildren(currentFrame);
    report('game_load_start', { attempt: currentAttempt });
    timer = window.setTimeout(() => {
      setState('timeout');
      if (moveFocus && document.activeElement === expand) retry.focus({ preventScroll: true });
      report('game_load_timeout', { attempt: currentAttempt });
    }, 10000);
  }

  function updateFullscreen() {
    const expanded = player.classList.contains('is-expanded');
    const active = document.fullscreenElement === player || expanded;
    expand.setAttribute('aria-pressed', String(active));
    expandText.textContent = active ? player.dataset.exitFullscreenLabel : player.dataset.fullscreenLabel;
    document.body.classList.toggle('has-expanded-player', expanded);
    for (const element of outside) {
      element.inert = expanded;
    }
  }

  function setExpanded(expanded) {
    player.classList.toggle('is-expanded', expanded);
    if (expanded) {
      player.setAttribute('role', 'dialog');
      player.setAttribute('aria-modal', 'true');
      player.setAttribute('aria-label', player.dataset.playerLabel);
    } else {
      player.removeAttribute('role');
      player.removeAttribute('aria-modal');
      player.removeAttribute('aria-label');
    }
    updateFullscreen();
    expand.focus({ preventScroll: true });
  }

  play.addEventListener('click', () => {
    report('play_click');
    if (mobilePlayer.matches && document.fullscreenElement !== player && !player.classList.contains('is-expanded')) {
      setExpanded(true);
    }
    loadGame();
  });
  restart.addEventListener('click', () => {
    report('game_restart', { attempt: attempts + 1 });
    loadGame();
  });
  retry.addEventListener('click', () => {
    report('game_retry', { attempt: attempts + 1 });
    loadGame();
  });
  expand.addEventListener('click', async () => {
    report('fullscreen_click');
    if (player.classList.contains('is-expanded')) {
      setExpanded(false);
    } else if (document.fullscreenElement === player) {
      await document.exitFullscreen();
    } else if (mobilePlayer.matches) {
      setExpanded(true);
    } else {
      try {
        await player.requestFullscreen();
      } catch {
        setExpanded(true);
      }
    }
  });
  document.addEventListener('fullscreenchange', updateFullscreen);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && player.classList.contains('is-expanded')) {
      setExpanded(false);
    }
  });
}
