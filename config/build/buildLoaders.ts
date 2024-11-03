import { ModuleOptions } from 'webpack';

export const buildLoaders = (): ModuleOptions['rules'] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssModuleLoader = {
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
            namedExport: false,
          },
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.css$/,
    exclude: /\.module\.css$/,
    use: ['style-loader', 'css-loader'],
  };

  return [typescriptLoader, cssModuleLoader, cssLoader];
};
