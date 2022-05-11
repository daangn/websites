/// <reference types="@karrotmarket/gatsby-theme-team-website/src/types/svgr" />

import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import {
  graphql,
  navigate,
  withPrefix,
  Link,
} from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { required } from '@cometjs/core';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';
import { vars } from '@seed-design/design-token';
import _PageTitle from '@karrotmarket/gatsby-theme-team-website/src/components/PageTitle';
import { ReactComponent as BackwardSvg } from '@karrotmarket/gatsby-theme-team-website/src/assets/backwardOutlineM.svg';

type IrPageProps = PageProps<GatsbyTypes.IrPageQuery>;

export const query = graphql`
  query IrPage(
    $uid: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicIr(uid: { eq: $uid }) {
      uid
      first_publication_date(locale: "ko", formatString: "YYYY-MM-DD")
      data {
        title {
          text
        }
        attachment_group {
          file {
            localFile {
              base
              publicURL
            }
          }
        }
        body {
          __typename
          ... on PrismicIrDataBodyMainText {
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicIrDataBodySupplementaryText {
            id
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`;

const Container = styled('div', {
  contentArea: true,
  maxWidth: rem(760),
});

const PreviousLink = styled(Link, {
  display: 'inline-block',
  color: vars.$scale.color.gray900,
  width: rem(36),
  height: rem(36),
  cursor: 'pointer',
  marginBottom: rem(20),

  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 0.64,
  },

  '@sm': {
    marginBottom: rem(36)
  },
})

const Content = styled('main', {
});

const PageTitle = styled(_PageTitle, {
});

const Body = styled('div', {
  display: 'grid',
  gap: '1.5rem',
  '& h2': {
    marginBottom: '1.5rem',
  },
});

const MainText = styled('div', {
  typography: '$body1',
});

const SupplementaryText = styled('div', {
  typography: '$body2',
  textAlign: 'center',
});

const Attachment = styled('div', {
});

const FileList = styled('ul', {
});

const FileListItem = styled('li', {
});

const File = styled('a', {
});

const IrPage: React.FC<IrPageProps> = ({
  data,
}) => {
  required(data.prismicIr);

  const attachments = data.prismicIr.data.attachment_group
    ?.filter(attachment => attachment?.file?.localFile?.publicURL)
    ?? [];

  return (
    <Container>
      <PreviousLink
        aria-label="목록으로 돌아가기"
        to="/ir/"
        onClick={e => {
          if (window.history.state['fromList']) {
            e.preventDefault();
            navigate(-1);
          }
        }}
      >
        <BackwardSvg />
      </PreviousLink>
      <Content>
        <PageTitle>
          {data.prismicIr.data.title?.text}
        </PageTitle>
        <div>
          <span>
            <span>게시일</span>
            <span>{data.prismicIr.first_publication_date}</span>
          </span>
        </div>
        <Body>
          {data.prismicIr.data.body.map(block => mapAbstractTypeWithDefault(block, {
            PrismicIrDataBodyMainText: block => (
              <MainText
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.primary.text?.html || '' }}
              />
            ),
            PrismicIrDataBodySupplementaryText: block => (
              <SupplementaryText
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.primary.text?.html || '' }}
              />
            ),
            _: null,
          }))}
        </Body>
        {attachments.length > 0 && (
          <Attachment>
            <h2>첨부파일 다운로드</h2>
            <FileList>
              {attachments.map((attachment, i) => {
                const href = withPrefix(attachment!.file!.localFile!.publicURL!);
                const base = decodeURIComponent(stripUUID(attachment!.file!.localFile!.base));
                return (
                  <FileListItem key={i}>
                    <File href={href} download={base}>
                      {base}
                    </File>
                  </FileListItem>
                )
              })}
            </FileList>
          </Attachment>
        )}
      </Content>
    </Container>
  );
};

export default IrPage;

function stripUUID(base: string) {
  return base.replace(/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}_?/, '');
}
