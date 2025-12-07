import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';

import { styled } from 'gatsby-theme-stitches/src/config';

import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as LineIcon } from '../../assets/line.svg';
import { ReactComponent as MediumIcon } from '../../assets/medium.svg';
import { ReactComponent as NaverBlogIcon } from '../../assets/naver_blog.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';

type SocialServiceProfileProps = {
  className?: string;
  profile: GatsbyTypes.SocialServiceProfile_profileFragment;
};

export const query = graphql`
  fragment SocialServiceProfile_profile on PrismicSiteNavigationDataSnsProfilesItem {
    service
    link {
      url
    }
  }
`;

const Container = styled('a', {
  display: 'inline-block',
  fontSize: rem(24),
  lineHeight: 0,

  '&:hover, &:focus': {
    opacity: 0.64,
  },
  '& svg': {
    width: '1em',
    height: '1em',
    color: vars.$scale.color.gray900,
  },
});

const socialServiceProfileConfigMap: Record<string, { comp: () => React.ReactElement }> = {
  github: {
    comp: () => <GithubIcon />,
  },
  twitter: {
    comp: () => <TwitterIcon />,
  },
  facebook: {
    comp: () => <FacebookIcon />,
  },
  instagram: {
    comp: () => <InstagramIcon />,
  },
  medium: {
    comp: () => <MediumIcon />,
  },
  line: {
    comp: () => <LineIcon />,
  },
  youtube: {
    comp: () => <YoutubeIcon />,
  },
  naver_blog: {
    comp: () => <NaverBlogIcon />,
  },
};

export default function SocialServiceProfile({ className, profile }: SocialServiceProfileProps) {
  const config = socialServiceProfileConfigMap[profile.service || ''];
  if (!config) {
    console.warn(`${profile.service} has no implementation`);
    return null;
  }

  if (!profile.link) {
    console.warn('link is empty');
    return null;
  }

  const Icon = config.comp;

  return (
    <Container
      className={className}
      href={profile.link.url}
      target="_blank"
      rel="external noopener"
    >
      <Icon />
    </Container>
  );
}
