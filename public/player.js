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
    const moveFocus = document.activeElement === play || document.activeElement === retry;
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
    const active = document.fullscreenElement === player || player.classList.contains('is-expanded');
    expand.setAttribute('aria-pressed', String(active));
    expandText.textContent = active ? player.dataset.exitFullscreenLabel : player.dataset.fullscreenLabel;
    document.body.classList.toggle('has-expanded-player', player.classList.contains('is-expanded'));
    const outside = [document.querySelector('.site-header'), document.querySelector('.site-footer'), document.querySelector('.reading-surface')];
    for (const element of outside) {
      if (element) element.inert = player.classList.contains('is-expanded');
    }
  }

  play.addEventListener('click', () => {
    report('play_click');
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
  player.querySelector('[data-original]').addEventListener('click', () => report('open_original'));
  expand.addEventListener('click', async () => {
    report('fullscreen_click');
    if (player.classList.contains('is-expanded')) {
      player.classList.remove('is-expanded');
    } else if (document.fullscreenElement === player) {
      await document.exitFullscreen();
    } else {
      try {
        await player.requestFullscreen();
      } catch {
        player.classList.add('is-expanded');
      }
    }
    updateFullscreen();
  });
  document.addEventListener('fullscreenchange', updateFullscreen);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && player.classList.contains('is-expanded')) {
      player.classList.remove('is-expanded');
      updateFullscreen();
      expand.focus({ preventScroll: true });
    }
  });
}
