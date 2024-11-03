import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types';

export const buildPlugins = ({
  paths,
}: BuildOptions): Configuration['plugins'] => [
  new HtmlWebpackPlugin({ template: paths.html }),
  new ProgressPlugin(),
];
