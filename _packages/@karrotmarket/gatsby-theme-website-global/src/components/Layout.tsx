import * as React from 'react';

import globalStyles from '../styles/global';

interface LayoutProps {
  // rome-ignore lint/suspicious/noExplicitAny: will be removed soon
  data: any;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  globalStyles();

  return <>{children}</>;
};

export default Layout;
