module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  // future: {
  //   webpack5: true,
  // },
  images: {
    loader: 'imgix',
    path: '/',
  },
  trailingSlash: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId },
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/cocktail/178341': { page: '/cocktail', query: { id: '178341' } },
  //   };
  // },
  webpack(config) {
    config.module.rules.push({
      // Ref: https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
      // Ref 2: https://github.com/twopluszero/next-images/commit/01d3b2b89d88748cb4c43d54319c88fe06cd75b7
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      parser: {
        amd: false,
      },
    });
    return config;
  },
};
