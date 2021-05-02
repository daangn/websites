import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import githubIconUrl from '!!file-loader?modules!./socialServiceProfile/github.svg';
import facebookIconUrl from '!!file-loader?modules!./socialServiceProfile/facebook.svg';
import twitterIconUrl from '!!file-loader?modules!./socialServiceProfile/twitter.svg';
import mediumIconUrl from '!!file-loader?modules!./socialServiceProfile/medium.svg';
import instagramIconUrl from '!!file-loader?modules!./socialServiceProfile/instagram.svg';

type SocialServiceProfileProps = {
  className?: string,
  profile: GatsbyTypes.SocialServiceProfile_profileFragment,
};

export const query = graphql`
  fragment SocialServiceProfile_profile on SocialProfileEntry {
    service
    url
  }
`;

const Container = styled('a', {
  display: 'inline-block',
  fontSize: rem(24),
  lineHeight: 0,
});

const Icon = styled('img', {
  width: '1em',
  height: '1em',
});

const socialServiceProfileConfigMap: Record<string, { src: string, alt: string }> = {
  GITHUB: {
    src: githubIconUrl,
    alt: 'GitHub',
  },
  TWITTER: {
    src: twitterIconUrl,
    alt: 'Twitter',
  },
  FACEBOOK: {
    src: facebookIconUrl,
    alt: 'Facebook',
  },
  INSTAGRAM: {
    src: instagramIconUrl,
    alt: 'Instagram',
  },
  MEDIUM: {
    src: mediumIconUrl,
    alt: 'Medium',
  },
};

export default function SocialServiceProfile({
  className,
  profile,
}: SocialServiceProfileProps) {
  const config = socialServiceProfileConfigMap[profile.service];
  if (!config) {
    console.warn(`${profile.service} has no implementation`);
    return null;
  }
  return (
    <Container
      className={className}
      href={profile.url}
      target="_blank"
      rel="external noopener"
    >
      <Icon src={config.src} alt={config.alt} />
    </Container>
  );
}
