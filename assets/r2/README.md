# R2 image sources

The files in `images/` are the source copies for the public R2 bucket:

- Bucket: `mottlegame-static`
- Public domain: `https://assets.mottlegame.cc`
- Object prefix: `images/`

Image object names are lowercase, hyphenated, descriptive, and start with the
site topic `mottle-game`. The Astro site references the R2 URLs directly, so
this directory is not copied into the Pages `dist/` output.

When replacing an image, keep the existing object key when the meaning is
unchanged. Upload the new object with the correct image MIME type, verify the
public URL and response headers, then purge that URL from Cloudflare cache.
