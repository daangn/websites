import * as React from 'react';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';

import ButtonLink from '../Button';
import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

type EmptyPlaceholderProps = {
  link: string,
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
  link,
  className,
}) => {
  const messages = useTranslation();

  return (
    <Container className={className}>
      <Content>
        <Text>{messages.job_post_list__empty_placeholder__no_results}</Text>
        <ButtonLink
          to={link}
          fullWidth={{ '@initial': true, '@sm': false }}
        >
          {messages.job_post_list__empty_placeholder__back_to_list}
        </ButtonLink>
      </Content>
    </Container>
  );
};

export default EmptyPlaceholder;
