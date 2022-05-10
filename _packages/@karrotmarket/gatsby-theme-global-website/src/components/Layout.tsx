import * as React from "react";

import globalStyles from "../styles/global";

interface LayoutProps {
  data: any;
}

const Layout: React.FC<LayoutProps> = ({ children, data }) => {
  globalStyles();

  return <>{children}</>;
};

export default Layout;
