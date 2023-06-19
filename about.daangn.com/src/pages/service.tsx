import { vars } from '@seed-design/design-token';
import { type HeadProps, Link, type PageProps, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { rem } from 'polished';
import * as React from 'react';
import 'simple-reveal/index.css';
import { SimpleReveal } from 'simple-reveal';

import externalSvgUrl from '!!file-loader!../assets/external.svg';

export const query = graphql`
query ServicePage($locale: String!, $navigationId: String!) {
  ...TeamWebsite_DefaultLayout_query
  prismicServiceContent {
    data {
      service_page_meta_title
      service_page_meta_description
      service_page_title {
        text
      }
      service_page_og_image {
        localFile {
          childImageSharp {
            fixed(
              width: 1200
              height: 630
              toFormat: PNG
              quality: 90
            ) {
              src
              width
              height
            }
          }
        }
      }
      body {
        ... on PrismicServiceContentDataBodyServiceDescription {
          id
          slice_type
          items {
            service_key
            service_name {
              text
            }
            service_description
            service_url {
              url
            }
            service_image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            service_icon {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        ... on PrismicServiceContentDataBodySubServiceDescription {
          id
          slice_type
          items {
            parent_service_key
            sub_service_description
            sub_service_key
            sub_service_name {
              text
            }
          }
        }
      }
    }
  }
}
`;

type ServicePageProps = PageProps<GatsbyTypes.ServicePageQuery>;

const ServicePage: React.FC<ServicePageProps> = ({ data }) => {
  const services = data.prismicServiceContent?.data.body[0].items;
  const subServices = data.prismicServiceContent?.data.body[1].items;

  const isNotLastLine = (i: number) => {
    if (services) {
      return i < services.length - 1;
    }
  };

  return (
    <Container>
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <TitleArea ref={ref} className={cn()} style={style}>
            <Title>{data.prismicServiceContent?.data.service_page_title?.text}</Title>
          </TitleArea>
        )}
        duration={500}
      />

      {services?.map(
        (
          {
            service_key,
            service_name,
            service_description,
            service_url,
            service_icon,
            service_image,
          },
          i,
        ) => {
          return (
            <SimpleReveal
              render={({ ref, cn, style }) => (
                <React.Fragment key={service_key}>
                  <Card ref={ref} className={cn()} style={style}>
                    <LeftContent>
                      <ServiceTitle>
                        <ServiceIcon
                          image={service_icon.localFile.childImageSharp.gatsbyImageData}
                          alt={service_icon?.alt}
                        />
                        {service_url.url ? (
                          <ServiceLink
                            as="a"
                            target="_blank"
                            rel="external noopener"
                            href={service_url.url}
                          >
                            {service_name.text}
                          </ServiceLink>
                        ) : (
                          <ServiceName>{service_name.text}</ServiceName>
                        )}
                      </ServiceTitle>
                      <ServiceDescription>{service_description}</ServiceDescription>
                    </LeftContent>
                    <RightContent>
                      <ServiceImage
                        image={service_image.localFile.childImageSharp.gatsbyImageData}
                        alt={service_image?.alt}
                      />
                    </RightContent>
                  </Card>

                  {subServices?.filter(
                    ({ parent_service_key }) => parent_service_key === service_key,
                  ).length > 0 && (
                    <SubCardWrapper>
                      {subServices
                        ?.filter(({ parent_service_key }) => parent_service_key === service_key)
                        .map((item) => (
                          <SubCard key={item.sub_service_key + String(i)}>
                            <SubCardTitle>{item.sub_service_name.text}</SubCardTitle>
                            <SubCardDesctiption>{item.sub_service_description}</SubCardDesctiption>
                          </SubCard>
                        ))}
                    </SubCardWrapper>
                  )}
                  {isNotLastLine(i) && <CardLine />}
                </React.Fragment>
              )}
              duration={1000}
              delay={150 * (i + 1)}
              initialTransform="translateY(2rem)"
            />
          );
        },
      )}
    </Container>
  );
};

type ServicePageHeadProps = HeadProps<GatsbyTypes.ServicePageQuery>;

export const Head: React.FC<ServicePageHeadProps> = ({ data, location }) => {
  const {
    service_page_meta_title,
    service_page_meta_description,
    service_page_og_image,
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  } = data.prismicServiceContent?.data as any;

  const metaImage = service_page_og_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo
      location={location}
      title={service_page_meta_title}
      description={service_page_meta_description}
    >
      {(props) => [
        <OpenGraph
          key='og'
          og={{
            ...props,
            type: 'website',
            ...(metaImage && {
              images: [
                {
                  url: new URL(
                    metaImage.src,
                    metaImage.src.startsWith('http') ? metaImage.src : props.url,
                  ),
                  width: metaImage.width,
                  height: metaImage.height,
                },
              ],
            }),
          }}
        />,
        <TwitterCard
          key='twitter'
          card={{
            ...props,
            type: 'summary',
          }}
        />,
      ]}
    </HeadSeo>
  );
};

const Container = styled('main', {
  contentArea: true,
  contentSpaceTop: true,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TitleArea = styled('section', {
  width: '100%',
  textAlign: 'left',
  marginBottom: 0,

  '@lg': {
    marginBottom: rem(80),
  },
});

const Title = styled('h1', {
  typography: '$subtitle2',
  whiteSpace: 'pre-line',
  textAlign: 'left',

  '@sm': {
    typography: '$heading3',
  },
});

const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  marginTop: rem(64),

  '@lg': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: rem(220),
    maxHeight: rem(400),
    marginTop: 0,
  },
});

const CardLine = styled('hr', {
  display: 'none',
  borderWidth: '0 0 1px 0',
  borderColor: vars.$scale.color.gray200,
  width: '100%',
  margin: `${rem(88)} 0`,

  '@lg': {
    display: 'block',
  },
});

const LeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',

  '@lg': {
    width: '40%',
  },
});

const ServiceTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: rem(20),

  '@lg': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 0,
  },
});

const ServiceIcon = styled(GatsbyImage, {
  width: rem(40),
  marginRight: rem(10),

  '@lg': {
    width: rem(80),
    marginBottom: rem(80),
    marginRight: 0,
  },
});

const ServiceName = styled('h3', {
  fontSize: rem(22),
  lineHeight: '$subtitle3',

  '@lg': {
    fontSize: '$subtitle1',
    lineHeight: '$subtitle1',
  },
});

const ServiceLink = styled(Link, {
  display: 'inline-flex',
  textDecoration: 'none',
  fontSize: rem(22),
  fontWeight: 'bold',
  color: vars.$scale.color.gray900,

  '&:hover, &:focus': {
    color: vars.$scale.color.gray600,
  },

  '&::after': {
    content: '',
    display: 'inline-block',
    width: rem(28),
    height: rem(28),
    marginTop: rem(0),
    backgroundColor: 'currentColor',
    maskImage: `url(${externalSvgUrl})`,

    '@lg': {
      width: rem(40),
      height: rem(40),
      marginTop: rem(5),
    },
  },

  '@lg': {
    fontSize: '$subtitle1',
    lineHeight: '$subtitle1',
  },
});

const ServiceDescription = styled('p', {
  marginTop: rem(12),
  fontSize: '$body2',
  lineHeight: '160%',
  color: vars.$scale.color.gray700,

  '@lg': {
    marginTop: rem(10),
  },
});

const RightContent = styled('div', {
  width: '100%',

  '@lg': {
    width: '40%',
    marginLeft: rem(80),
  },
});

const ServiceImage = styled(GatsbyImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SubCardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: rem(30),

  '@lg': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rem(100),
  },
});

const SubCard = styled('div', {
  width: '100%',
  marginBottom: rem(32),

  '@lg': {
    maxWidth: rem(328),
    marginBottom: 0,
  },
});

const SubCardTitle = styled('h3', {
  fontSize: rem(20),
  marginBottom: rem(12),

  '@lg': {
    fontSize: '$subtitle2',
    marginBottom: rem(20),
  },
});

const SubCardDesctiption = styled('p', {
  fontSize: '$body2',
  lineHeight: '160%',
  color: vars.$scale.color.gray700,
  letterSpacing: rem(0.4),
});

export default ServicePage;
