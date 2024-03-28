import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import ButtonLink from '../Button';

type EmptyPlaceholderProps = {
  link: string;
  className?: string;
  buttonVisible?: boolean;
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
  color: vars.$scale.color.gray500,
  typography: '$subtitle3',
  textAlign: 'center',
});

const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = ({
  link,
  className,
  buttonVisible = true,
}) => {
  const messages = useTranslation();

  return (
    <Container className={className}>
      <Content>
        <Text>{messages.job_post_list__empty_placeholder__no_results}</Text>
        {buttonVisible && (
          <ButtonLink to={link} fullWidth={{ '@initial': true, '@sm': false }}>
            {messages.job_post_list__empty_placeholder__back_to_list}
          </ButtonLink>
        )}
      </Content>
    </Container>
  );
};

export default EmptyPlaceholder;
