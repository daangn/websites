import * as React from 'react';
import { graphql } from 'gatsby';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';

import { styled } from 'gatsby-theme-stitches/src/config';

import { ReactComponent as GithubIcon } from './socialServiceProfile/github.svg';
import { ReactComponent as FacebookIcon } from './socialServiceProfile/facebook.svg';
import { ReactComponent as TwitterIcon } from './socialServiceProfile/twitter.svg';
import { ReactComponent as MediumIcon } from './socialServiceProfile/medium.svg';
import { ReactComponent as InstagramIcon } from './socialServiceProfile/instagram.svg';
import { ReactComponent as LineIcon } from './socialServiceProfile/line.svg';
import { ReactComponent as YoutubeIcon } from './socialServiceProfile/youtube.svg';
import { ReactComponent as NaverBlogIcon } from './socialServiceProfile/naver_blog.svg';

type SocialServiceProfileProps = {
  className?: string;
  profile: GatsbyTypes.SocialServiceProfile_profileFragment;
};

export const query = graphql`
  fragment SocialServiceProfile_profile on PrismicSiteNavigationDataSnsProfiles {
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

const Icon = styled('img', {
  width: '1em',
  height: '1em',
});

const socialServiceProfileConfigMap: Record<string, { comp: React.SVGProps<SVGSVGElement> }> = {
  github: {
    comp: <GithubIcon />,
  },
  twitter: {
    comp: <TwitterIcon />,
  },
  facebook: {
    comp: <FacebookIcon />,
  },
  instagram: {
    comp: <InstagramIcon />,
  },
  medium: {
    comp: <MediumIcon />,
  },
  line: {
    comp: <LineIcon />,
  },
  youtube: {
    comp: <YoutubeIcon />,
  },
  naver_blog: {
    comp: <NaverBlogIcon />,
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

  return (
    <Container
      className={className}
      href={profile.link.url}
      target="_blank"
      rel="external noopener"
    >
      {config.comp}
    </Container>
  );
}
