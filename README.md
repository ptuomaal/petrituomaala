# petrituomaala.fi

Personal website and CV. Static, no frameworks.

## Tech

- HTML5, CSS Grid, CSS custom properties (OKLCH)
- ES6 modules, Web Components
- PWA (service worker, manifest)
- Dark/light theme with `prefers-color-scheme` support
- Finnish/English (i18n module)

## Structure

```
src/
  index.html          Main page
  cv.html             CV page
  css/main.css        Design system and layout
  css/cv.css          CV-specific styles
  js/components.js    Web components + theme system
  js/i18n.js          Translations (FI/EN)
  js/main.js          Entry point, SW registration
  js/logo.js          Console easter egg
  js/skills.js        Console skills output
  serviceworker.js    Network-first SW
  manifest.json       PWA manifest
```

## Development

```
cd src && python3 -m http.server 8080
```

Open http://localhost:8080

## Deployment

Static files from `src/`. Bump version in `serviceworker.js` before deploying.
