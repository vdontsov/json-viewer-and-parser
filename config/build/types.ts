export type BuildMode = 'production' | 'development';

export type BuildEnv = {
  mode: BuildMode;
  port: number;
};

export type BuildOptions = BuildEnv & {
  paths: {
    entry: string;
    build: string;
    html: string;
  };
};
