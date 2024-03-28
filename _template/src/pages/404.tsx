import type { PageProps } from 'gatsby';
import * as React from 'react';

type NotFoundPageProps = PageProps;

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return <div>Page not found :(</div>;
};

export default NotFoundPage;
