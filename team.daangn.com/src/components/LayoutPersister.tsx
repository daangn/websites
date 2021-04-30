import * as React from 'react';
import type { PageProps } from 'gatsby';
import { AnimateSharedLayout } from 'framer-motion';

const LayoutPersister: React.FC<PageProps> = ({
  children,
}) => {
  return (
    <AnimateSharedLayout type="crossfade">
      {children}
    </AnimateSharedLayout>
  );
};

export default LayoutPersister;
