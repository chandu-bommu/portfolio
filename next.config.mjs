const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPagesRepo = repoName.endsWith('.github.io');
const basePath = repoName && !isUserPagesRepo ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`
      }
    : {})
};

export default nextConfig;
