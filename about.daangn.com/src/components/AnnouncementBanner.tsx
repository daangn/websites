import { IconArrowRightLine } from '@karrotmarket/react-monochrome-icon';
import { vars } from '@seed-design/design-token';
import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

export const useAnnouncement = () => {
  const data = useStaticQuery<GatsbyTypes.AnnouncementBannerQuery>(graphql`
    query AnnouncementBanner {
      prismicSiteNavigation(uid: { eq: "about.daangn.com" }) {
        data {
          announcement_active
          announcement_text
          announcement_link {
            url
          }
        }
      }
    }
  `);

  const nav = data.prismicSiteNavigation?.data;

  return {
    active: Boolean(nav?.announcement_active && nav.announcement_text),
    text: nav?.announcement_text ?? '',
    href: nav?.announcement_link?.url ?? undefined,
  };
};

const Bar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: rem(4),
  height: 'var(--banner-height)',
  paddingX: rem(24),

  background: vars.$scale.color.gray100,
  color: vars.$scale.color.gray900,
  fontSize: rem(14),
  fontWeight: 500,
  lineHeight: 1.4,
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background 0.2s',

  '&:hover': {
    background: vars.$scale.color.gray200,
  },
});

type AnnouncementBannerProps = {
  text: string;
  href?: string;
};

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ text, href }) => {
  const content = (
    <>
      {text}
      <IconArrowRightLine size={14} />
    </>
  );

  if (href) {
    return (
      <Bar as="a" href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Bar>
    );
  }

  return <Bar>{content}</Bar>;
};

export default AnnouncementBanner;
