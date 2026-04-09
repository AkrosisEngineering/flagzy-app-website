# Flagzy App Website

Static GitHub Pages website for the Flagzy mobile game.

## Included Pages

- `index.html`: Single-page landing page with anchor navigation and EN/TR switch
- `privacy.html`: Public privacy policy placeholder page
- `user-agreement.html`: Public user agreement placeholder page
- `app-ads.txt`: Root-level AdMob placeholder file

## Local Preview

Open the site locally with:

```bash
python3 -m http.server 8123
```

Then visit `http://127.0.0.1:8123`.

## Publish on GitHub Pages

1. Push this folder into a GitHub repository.
2. Open repository `Settings > Pages`.
3. Select the branch and root folder for publishing.
4. Save and wait for the GitHub Pages URL to be generated.

## Before Production

- Replace placeholder App Store and Google Play links
- Replace placeholder legal copy in `privacy.html` and `user-agreement.html`
- Update `app-ads.txt` with the real AdMob publisher ID
- Replace placeholder visuals and screenshots
