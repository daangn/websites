import NumberFlow, { continuous } from '@number-flow/react';
import commaNumber from 'comma-number';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { graphql } from 'gatsby';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useIntersection, useMedia } from 'react-use';
import Centered from './Centered';
import * as css from './Numbers.css';
import { media } from './media.css';

export const query = graphql`
  fragment TeamWebsite_Numbers_query on Query {
    prismicVisionPage {
      data {
        numbers_title {
          text
        }

        # Numbers 1
        numbers_1_title {
          text
        }
        numbers_1_small_title {
          text
        }
        numbers_1_number {
          text
        }
        numbers_1_number_suffix {
          text
        }
        numbers_1_color

        # Numbers 2
        numbers_2_title {
          text
        }
        numbers_2_small_title {
          text
        }
        numbers_2_number {
          text
        }
        numbers_2_number_suffix {
          text
        }
        numbers_2_color

        # Numbers 3
        numbers_3_title {
          text
        }
        numbers_3_small_title {
          text
        }
        numbers_3_number {
          text
        }
        numbers_3_number_suffix {
          text
        }
        numbers_3_color

        # Numbers 4
        numbers_4_title {
          text
        }
        numbers_4_small_title {
          text
        }
        numbers_4_number {
          text
        }
        numbers_4_number_suffix {
          text
        }
        numbers_4_color
      }
    }
  }
`;

type Props = {
  query: GatsbyTypes.TeamWebsite_Numbers_queryFragment,
};

export default function Numbers({ query: data }: Props) {
  const numbers = [
    {
      title: data.prismicVisionPage.data.numbers_1_title.text,
      smallTitle: data.prismicVisionPage.data.numbers_1_small_title.text,
      number: Number(data.prismicVisionPage.data.numbers_1_number.text),
      numberSuffix: data.prismicVisionPage.data.numbers_1_number_suffix.text,
      color: data.prismicVisionPage.data.numbers_1_color,
    },
    {
      title: data.prismicVisionPage.data.numbers_2_title.text,
      smallTitle: data.prismicVisionPage.data.numbers_2_small_title.text,
      number: Number(data.prismicVisionPage.data.numbers_2_number.text),
      numberSuffix: data.prismicVisionPage.data.numbers_2_number_suffix.text,
      color: data.prismicVisionPage.data.numbers_2_color,
    },
    {
      title: data.prismicVisionPage.data.numbers_3_title.text,
      smallTitle: data.prismicVisionPage.data.numbers_3_small_title.text,
      number: Number(data.prismicVisionPage.data.numbers_3_number.text),
      numberSuffix: data.prismicVisionPage.data.numbers_3_number_suffix.text,
      color: data.prismicVisionPage.data.numbers_3_color,
    },
    {
      title: data.prismicVisionPage.data.numbers_4_title.text,
      smallTitle: data.prismicVisionPage.data.numbers_4_small_title.text,
      number: Number(data.prismicVisionPage.data.numbers_4_number.text),
      numberSuffix: data.prismicVisionPage.data.numbers_4_number_suffix.text,
      color: data.prismicVisionPage.data.numbers_4_color,
    },
  ];

  const isMedium = useMedia(media.medium, false);
  const isSmall = useMedia(media.small, false);

  const intersectionRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      breakpoints: {
        [media.medium]: { active: false },
      },
    },
    [
      Autoplay({
        active: true,
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
        stopOnLastSnap: false,
      }),
    ],
  );

  const selectedIndex = useSelectedIndex(emblaApi);

  return (
    <Centered>
      <div className={css.container} ref={intersectionRef}>
        <div className={css.titles}>
          <div className={css.title}>{'당근은 매일\n새로운 역사를 쓰고 있어요'}</div>
          <div className={css.subtitle}>2025년 1월 기준</div>
        </div>
        <div className={css.embla} ref={emblaRef}>
          <div className={css.emblaContainer}>
            {numbers.map((item, i) => (
              <div className={css.cardContainer} key={item.title}>
                <div className={css.card} style={{ backgroundColor: item.color }}>
                  <div className={css.cardTitle}>{isSmall ? item.smallTitle : item.title}</div>
                  <div className={css.cardNumber}>
                    <NumberFlow
                      className={css.cardNumberOverlay}
                      value={
                        (selectedIndex === i && intersection?.isIntersecting) || isMedium
                          ? item.number
                          : 0
                      }
                      suffix={item.numberSuffix}
                      plugins={[continuous]}
                    />
                    <div className={css.cardNumberPlaceholder}>
                      {commaNumber(item.number)}
                      {item.numberSuffix}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Centered>
  );
}

type EmblaCarouselType = UseEmblaCarouselType[1];

function useSelectedIndex(emblaApi: EmblaCarouselType | undefined) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return selectedIndex;
}
