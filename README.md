# Chandrasekhar Bommu Portfolio (Next.js)

This repository contains a Next.js portfolio site tailored for deployment to **GitHub Pages** using free hosting.

## Local development

```bash
npm install
npm run dev
```

## Build static export

```bash
npm run build
```

The static output is generated in `out/` and deployed automatically through `.github/workflows/deploy.yml`.

## GitHub Pages setup

1. Use repository name `cbommu.github.io` under your account (`cbommu/cbommu.github.io`) for root domain hosting.
2. Push this code to the `main` branch.
3. In **Settings → Pages**, ensure GitHub Pages is enabled and source is **GitHub Actions**.
4. In **Settings → Actions → General**, allow GitHub Actions to create and approve deployments if restricted.
5. Re-run the workflow after enabling Pages.
6. Once the workflow succeeds, your site will be available at:
   - `https://cbommu.github.io`
