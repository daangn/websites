import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

interface BannerProps {
  item: GatsbyTypes.PrismicTeamBannerDataBodyBannerItem
}
const Banner: React.FC<BannerProps> = ({ item }) => {
  if (!(item && item.image_size_360?.alt && item.image_size_576?.alt && item.image_size_768?.alt && item.link_href?.url)) {
    return null;
  }

  const image360 = item.image_size_360.localFile?.childImageSharp?.gatsbyImageData && getImage(
    item.image_size_360?.localFile?.childImageSharp?.gatsbyImageData,
  );
  const image576 = item.image_size_576.localFile?.childImageSharp?.gatsbyImageData && getImage(
    item.image_size_576?.localFile?.childImageSharp?.gatsbyImageData,
  );
  const image768 = item.image_size_768.localFile?.childImageSharp?.gatsbyImageData && getImage(
    item.image_size_768?.localFile?.childImageSharp?.gatsbyImageData,
  );

  if (!image360) {
    return null;
  }
  if (!image576) {
    return null;
  }
  if (!image768) {
    return null;
  }

  return (
    <Container
      css={{
        backgroundColor: item.bg_color as string
      }}
      href={item.link_href?.url}
      target="_blank"
      rel="noopener"
    >
      <BannerImage>
        <BannerImage360 image={image360} alt={item.image_size_360.alt} />
        <BannerImage576 image={image576} alt={item.image_size_576.alt} />
        <BannerImage768 image={image768} alt={item.image_size_768.alt} /> 
      </BannerImage>
    </Container>
  );
}


const Container = styled('a', {
  display: 'block',
  cursor: 'pointer',
  minWidth: '100%',
  scrollSnapAlign: 'center',
});

const BannerImage = styled('div', {
  margin: "0 auto",
  width: '100%',
  maxWidth: rem(360),
  '@sm': {
    maxWidth: rem(576),
  },
  '@md': {
    maxWidth: rem(768),
  },
})

const BannerImage360 = styled(GatsbyImage, {
  display: 'block',
  '@sm': {
    display: 'none',
  }
})

const BannerImage576 = styled(GatsbyImage, {
  display: 'none',
  '@sm': {
    display: 'block',
  },
  '@md': {
    display: 'none',
  }
})

const BannerImage768 = styled(GatsbyImage, {
  display: 'none',
  '@md': {
    display: 'block',
  }
})

export default Banner