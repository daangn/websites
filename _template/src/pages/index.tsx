import type { PageProps } from 'gatsby';
import * as React from 'react';

import Greeting from '../components/Greeting';

type IndexPageProps = PageProps;

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <div>
      <Greeting name="World" />
    </div>
  );
};

export default IndexPage;
