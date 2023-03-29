import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: 'gatsby-source-note-com',
      options: {
        creator: 'jp_karrot',
      },
    },
  ],
};

export default config;
