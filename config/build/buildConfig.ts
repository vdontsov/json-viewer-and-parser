import { Configuration } from 'webpack';

import { BuildOptions } from './types';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';

export const buildConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;

  const isDev = mode === 'development';

  return {
    mode: mode || 'development',
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: { rules: buildLoaders() },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  };
};
