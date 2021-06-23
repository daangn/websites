import * as React from 'react';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import ButtonLink from '~/components/Button';

type EmptyPlaceholderProps = {
  className?: string,
};

const Container = styled('div', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(40),
});

const Text = styled('p', {
  color: '$gray500',
  typography: '$subtitle3',
  textAlign: 'center',
});

const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = ({
  className,
}) => {
  return (
    <Container className={className}>
      <Content>
        <Text>검색 결과가 없습니다.</Text>
        <ButtonLink
          to="/jobs/"
          fullWidth={{ '@initial': true, '@sm': false }}
        >
          전체 공고로 돌아가기
        </ButtonLink>
      </Content>
    </Container>
  );
};

export default EmptyPlaceholder;
