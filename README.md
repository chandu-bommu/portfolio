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

1. Create/use repository: `cbommu/cbommu.github.io`.
2. Push this code to the `main` branch.
3. In GitHub repository settings, ensure **Pages** source is set to **GitHub Actions**.
4. Once the workflow succeeds, your site will be available at:
   - `https://cbommu.github.io`
