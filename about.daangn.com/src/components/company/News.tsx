import { IconArrowRightLine } from '@karrotmarket/react-monochrome-icon';
import useEmblaCarousel from 'embla-carousel-react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from './Button';
import CarouselControl from './CarouselControl';
import Centered from './Centered';
import * as css from './News.css';
import { media, show } from './media.css';

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  return array.reduce<T[][]>((acc, _, index) => {
    if (index % chunkSize === 0) {
      acc.push(array.slice(index, index + chunkSize));
    }
    return acc;
  }, []);
}

export default function News() {
  const data = useStaticQuery(graphql`
    query News {
      allPost(
        filter: {category: {name: {eq: "pr"}}}
        sort: {publishedAt: DESC}
        limit: 6
      ) {
        nodes {
          slug
          title
          publishedAt
          thumbnailImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      prismicVisionPage {
        data {
          news_title {
            text
          }
          news_more_button_label {
            text
          }
        }
      }
    }
  `);

  // biome-ignore lint/suspicious/noExplicitAny: typegen isn't working
  const newsItems = data.allPost.nodes.map((node: any) => ({
    title: node.title,
    date: node.publishedAt,
    image: node.thumbnailImage.childImageSharp.gatsbyImageData,
    slug: node.slug,
  }));

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    breakpoints: {
      [media.medium]: { active: false },
    },
  });

  return (
    <Centered>
      <div className={css.container}>
        <div className={css.heading}>
          <div className={css.title}>
            <span>{data.prismicVisionPage.data.news_title.text}</span>
          </div>
          <div className={css.right}>
            <div className={show({ when: 'base' })}>
              <CarouselControl
                onPrev={() => {
                  emblaApi?.scrollPrev();
                }}
                onNext={() => {
                  emblaApi?.scrollNext();
                }}
              />
            </div>
            <Button icon={<IconArrowRightLine size={18} />} to="/company/pr/">
              {data.prismicVisionPage.data.news_more_button_label.text}
            </Button>
          </div>
        </div>
        <div className={css.cards} ref={emblaRef}>
          <div className={css.cardsContainer}>
            {/* biome-ignore lint/suspicious/noExplicitAny: typegen isn't working */}
            {chunkArray(newsItems, 3).map((newsItemGroup: any) => (
              <div
                className={css.newsCardGroup}
                // biome-ignore lint/suspicious/noExplicitAny: typegen isn't working
                key={newsItemGroup.map((d: any) => d.title).join(',')}
              >
                {/* biome-ignore lint/suspicious/noExplicitAny: typegen isn't working */}
                {newsItemGroup.map((d: any) => (
                  <Link key={d.title} className={css.newsCard} to={`/company/pr/archive/${d.slug}`}>
                    <div className={css.newsCardImageContainer}>
                      <div className={css.newsCardImageRatio}>
                        <GatsbyImage className={css.newsCardImage} image={d.image} alt={d.title} />
                      </div>
                    </div>
                    <div className={css.newsCardTitles}>
                      <div className={css.newsCardTitle}>{d.title}</div>
                      <div className={css.newsCardDate}>{d.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Centered>
  );
}
