import * as React from 'react';
import { rem } from 'polished';
import { graphql, navigate, withPrefix, Link, type PageProps, type HeadProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { mapAbstractTypeWithDefault } from '@cometjs/graphql-utils';
import { vars } from '@seed-design/design-token';
import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';
import PageTitle from '@karrotmarket/gatsby-theme-website-team/src/components/PageTitle';

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
            raw
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
  contentSpaceTop: true,
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
    marginBottom: rem(36),
  },
});

const Content = styled('article', {
  display: 'grid',
  gap: '4.5rem',
});

const ContentHeader = styled('header', {
  display: 'grid',
  gap: '1rem',
});

const Properties = styled('div', {
  typography: '$body2',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
});

const Property = styled('span', {
  display: 'inline-flex',
  gap: '0.5rem',
});

const Body = styled('main', {
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

const AttachmentSection = styled('section', {
  display: 'grid',
  gap: '1rem',
});

const AttachmentSectionTitle = styled('h2', {});

const FileList = styled('ul', {});

const FileListItem = styled('li', {});

const File = styled('a', {});

type IrPageProps = PageProps<GatsbyTypes.IrPageQuery>;
const IrPage: React.FC<IrPageProps> = ({ data: prismicData }) => {
  // rome-ignore lint/style/noNonNullAssertion: intentional
  const ir = prismicData.prismicIr!;
  const attachments =
    ir.data.attachment_group?.filter((attachment) => attachment?.file?.localFile?.publicURL) ?? [];

  return (
    <Container>
      <PreviousLink
        aria-label="목록으로 돌아가기"
        to="/ir/"
        onClick={(e) => {
          if (window.history.state['fromList']) {
            e.preventDefault();
            navigate(-1);
          }
        }}
      >
        <SeedIcon name="icon_backward_regular" size="100%" />
      </PreviousLink>
      <Content>
        <ContentHeader>
          <PageTitle>{ir.data.title?.text}</PageTitle>
          <Properties>
            <Property>
              <span>게시일</span>
              <span>{ir.first_publication_date}</span>
            </Property>
          </Properties>
        </ContentHeader>
        <Body>
          {ir.data.body.map((block) =>
            mapAbstractTypeWithDefault(block, {
              PrismicIrDataBodyMainText: (block) => (
                <MainText
                  key={block.id}
                  dangerouslySetInnerHTML={{ __html: block.primary.text?.html || '' }}
                />
              ),
              PrismicIrDataBodySupplementaryText: (block) => (
                <SupplementaryText
                  key={block.id}
                  dangerouslySetInnerHTML={{ __html: block.primary.text?.html || '' }}
                />
              ),
              _: null,
            }),
          )}
        </Body>
        {attachments.length > 0 && (
          <AttachmentSection>
            <AttachmentSectionTitle>첨부파일 다운로드</AttachmentSectionTitle>
            <FileList>
              {attachments.map((attachment) => {
                if (!attachment?.file?.raw) {
                  return null;
                }
                // rome-ignore lint/style/noNonNullAssertion: intentional
                const file = attachment!.file!.localFile!;
                // rome-ignore lint/style/noNonNullAssertion: intentional
                const href = withPrefix(file.publicURL!);
                const base = stripUUID(decodeURIComponent(file.base));
                return (
                  <FileListItem key={href}>
                    {/* vercel환경에서 `File` 서빙에 이슈가 있어 raw url을 그대로 사용합니다. */}
                    <File href={attachment.file.raw.url} target="_blank" rel="external noopener">
                      {base}
                    </File>
                  </FileListItem>
                );
              })}
            </FileList>
          </AttachmentSection>
        )}
      </Content>
    </Container>
  );
};
export default IrPage;

type IrPageHeadProps = HeadProps<GatsbyTypes.IrPageQuery>;
export const Head: React.FC<IrPageHeadProps> = ({ data }) => {
  // rome-ignore lint/style/noNonNullAssertion: intentional
  return <title>{[data.prismicIr!.data.title?.text, '당근마켓 IR'].join(' | ')}</title>;
};

function stripUUID(base: string) {
  return base.replace(
    /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}_?/,
    '',
  );
}
