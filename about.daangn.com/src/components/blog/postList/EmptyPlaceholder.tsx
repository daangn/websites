import { vars } from '@seed-design/design-token';
import { Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

type EmptyPlaceholderProps = {
  link: string;
  className?: string;
  buttonVisible?: boolean;
  onReset?: () => void;
};

const Container = styled('div', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
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

const ButtonLink = styled(Link, {
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$subtitle4',
  fontWeight: 'bold',
  textAlign: 'center',
  height: rem(60),
  border: 'none',
  borderRadius: rem(10),
  cursor: 'pointer',

  variants: {
    variant: {
      default: {
        color: vars.$scale.color.gray900,
        backgroundColor: vars.$scale.color.gray100,
        '&:hover': {
          backgroundColor: vars.$scale.color.gray300,
        },
      },
      primary: {
        color: vars.$semantic.color.onPrimary,
        backgroundColor: vars.$semantic.color.primary,
        '&:hover': {
          backgroundColor: vars.$semantic.color.primaryHover,
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'min-content',
        minWidth: rem(260),
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    fullWidth: false,
  },
});

const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = ({
  link,
  className,
  buttonVisible = true,
  onReset,
}) => {
  return (
    <Container className={className}>
      <Content>
        <Text>검색 결과가 없습니다.</Text>
        {buttonVisible && (
          <ButtonLink to={link} fullWidth={{ '@initial': true, '@sm': false }} onClick={onReset}>
            전체 목록으로 돌아가기
          </ButtonLink>
        )}
      </Content>
    </Container>
  );
};

export default EmptyPlaceholder;
