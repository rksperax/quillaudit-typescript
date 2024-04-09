import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add Monaco Editor Webpack Plugin
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ['javascript', 'typescript', 'html', 'css'], // Add languages as needed
        })
      );
    }

    return config;
  },
}

export default nextConfig;
