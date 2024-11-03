import path from 'path';

import { BuildEnv, BuildOptions } from './config/build/types';
import { buildConfig } from './config/build/buildConfig';

export default (env: BuildEnv) => {
  const options: BuildOptions = {
    mode: env.mode || 'development',
    port: env.port || 3000,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
  };

  return buildConfig(options);
};
