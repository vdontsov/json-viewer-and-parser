import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = ({
  port,
  paths,
}: BuildOptions): DevServerConfiguration => ({
  port,
  static: paths.build,
  open: true,
});
