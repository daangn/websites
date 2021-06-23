import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

import { ReactComponent as DaangniThanks } from '~/assets/daangni_thanks.svg';
import DefaultLayout from '~/layouts/DefaultLayout';
import ButtonLink from '~/components/Button';

type CompletedPageProps = PageProps<GatsbyTypes.CompletedPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query CompletedPage {
    ...DefaultLayout_query
  }
`;

const Container = styled('div', {
  contentArea: true,
  display: 'grid',
  gap: rem(24),
  alignItems: 'center',
  justifyContent: 'center',
});

const Illustration = styled(DaangniThanks, {
  margin: '0 auto',
  width: rem(150),
});

const MessageContainer = styled('div', {
  textAlign: 'center',
});

const Message = styled('p', {
  whiteSpace: 'pre-line',
  typography: '$body2',
});

const Contact = styled('span', {
});

const CompletedPage: React.FC<CompletedPageProps> = ({
  ...pageProps
}) => {
  return (
    <DefaultLayout {...pageProps}>
      <Container>
        <Illustration />
        <MessageContainer>
          <Message>
            {`당근마켓에 지원해 주셔서 감사드려요.
            합류하는 그 날까지 당근마켓팀이 응원할게요!
            당근마켓팀 드림`}
          </Message>
          <Contact>
            채용문의: <a href="mailto:recruit@daangn.com">recruit@daangn.com</a>
          </Contact>
        </MessageContainer>
        <ButtonLink to="/" fullWidth={{ '@sm': true }}>
          회사 소개 보기
        </ButtonLink>
      </Container>
    </DefaultLayout>
  );
};

export default CompletedPage;
