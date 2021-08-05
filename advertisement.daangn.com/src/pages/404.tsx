import * as React from 'react';
import type { PageProps } from 'gatsby';

type NotFoundPageProps = PageProps;

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div>Page not found :(</div>
  );
};

export default NotFoundPage;
