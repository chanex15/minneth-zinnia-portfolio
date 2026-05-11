# Minneth Zinnia — Portfolio Website

## File Structure

```
/
├── index.html          ← Main website (all-in-one)
├── _headers            ← Cloudflare caching & security headers
├── _redirects          ← Cloudflare SPA routing
├── wrangler.toml       ← Cloudflare Pages config
│
├── P1.jpg              ← YOUR PROFILE PHOTO  ← add this
├── image1.jpg          ← Portfolio image 1   ← add this
├── image2.jpg          ← Portfolio image 2   ← add this
├── image3.jpg          ← Portfolio image 3   ← add this
├── V1.mp4              ← Portfolio video 1   ← add this
├── V2.mp4              ← Portfolio video 2   ← add this
└── V3.mp4              ← Portfolio video 3   ← add this
```

## How to Add Your Media

Simply place these files in the **same folder** as `index.html`:

| File       | What it is                        |
|------------|-----------------------------------|
| `P1.jpg`   | Your profile / headshot photo     |
| `image1.jpg` | Portfolio image (carousel, design, etc.) |
| `image2.jpg` | Portfolio image (brand graphic, etc.) |
| `image3.jpg` | Portfolio image (quote post, etc.) |
| `V1.mp4`   | Short-form video (Reel / Shorts)  |
| `V2.mp4`   | UGC-style video                   |
| `V3.mp4`   | AI-assisted video                 |

> **Tip:** JPEG or WebP for images. MP4 (H.264) for videos. Keep videos under ~50MB each for fast loading.

## Deploying to Cloudflare Pages

### Option A — Drag & Drop (Easiest)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click **Create a project → Direct Upload**
3. Name your project (e.g. `minneth-zinnia`)
4. **Drag the entire folder** (with all your files including media) into the upload box
5. Click **Deploy site** — done! ✓

### Option B — GitHub (Auto-deploys on every push)
1. Create a GitHub repo and push this folder
2. In Cloudflare Pages → **Connect to Git** → select your repo
3. Build settings: leave blank (static site, no build command needed)
4. Click **Save and Deploy**

### Custom Domain
1. In your Cloudflare Pages project → **Custom Domains**
2. Add your domain (e.g. `minnethzinnia.com`)
3. Follow DNS instructions — Cloudflare handles SSL automatically ✓

## Notes
- The 3D particle background only renders on desktop (hidden on mobile for performance)
- The site is fully responsive — works on all screen sizes
- Images show a styled placeholder if the file is missing — replace with your actual files
- Videos show a placeholder player if the file is missing — replace with your actual files
