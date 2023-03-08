import type { GatsbyConfig } from 'gatsby';

type PluginOptions = {
  mode?: string;
};

const config = ({ mode }: PluginOptions): GatsbyConfig => ({
  plugins: [
    {
      resolve: 'gatsby-plugin-seed-design',
      options: {
        mode,
      },
    },
  ],
});

export default config;
