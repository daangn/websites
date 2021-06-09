import * as React from "react";
import type { PageProps } from "gatsby";

import { Flex } from "../components/Flex";

const NotFoundPage: React.FC<PageProps> = ({}) => {
  return <Flex center>not found</Flex>;
};

export default NotFoundPage;
