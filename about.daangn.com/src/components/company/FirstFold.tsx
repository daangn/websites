import { useGSAP } from '@gsap/react';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import { useRef } from 'react';
import { useWindowSize } from 'react-use';
import * as css from './FirstFold.css';
import { FIRST_FOLD_STORY_HEIGHT, MAX_WIDTH, SIDE_MARGIN } from './constants';
import { media } from './media.css';

const STORY_TITLE_OFFSET = 24;

const mm = gsap.matchMedia();

export const query = graphql`
  fragment TeamWebsite_FirstFold_query on Query {
    prismicVisionPage {
      data {
        first_fold_video1 {
          localFile {
            publicURL
          }
        }
        first_fold_title_1 {
          text
        }
        first_fold_title_2 {
          text
        }
      }
    }
  }
`;

type Props = {
  query: GatsbyTypes.TeamWebsite_FirstFold_queryFragment;
};

export default function FirstFold({ query: data }) {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  /**
   * Refs
   */
  const containerRef = useRef<HTMLDivElement>(null);
  const innerTitleContainerRef = useRef<HTMLDivElement>(null);
  const innerTitle1Ref = useRef<HTMLHeadingElement>(null);
  const innerTitle2Ref = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const innerTitleContainer = innerTitleContainerRef.current;
      const innerTitle1 = innerTitle1Ref.current;
      const innerTitle2 = innerTitle2Ref.current;
      const card = cardRef.current;

      const cardSidePadding =
        windowWidth > MAX_WIDTH + SIDE_MARGIN * 2 ? (windowWidth - MAX_WIDTH) / 2 : SIDE_MARGIN;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${FIRST_FOLD_STORY_HEIGHT}px`,
          pin: true,
          scrub: true,
          pinType: 'fixed',
        },
      });

      mm.add(media.base, () => {
        const cardInactiveStyle = {
          opacity: 1,
          clipPath: `inset(322px ${cardSidePadding}px -${css.CARD_BORDER_RADIUS}px ${cardSidePadding}px round ${css.CARD_BORDER_RADIUS}px)`,
        };
        const cardActiveStyle = {
          clipPath: 'inset(0px 0px 0px 0px round 0px)',
          ease: 'none',
          duration: 1,
        };

        tl.fromTo(card, cardInactiveStyle, cardActiveStyle);
        tl.to(card, {}, 1);
      });
      mm.add(media.medium, () => {
        const cardInactiveStyle = {
          opacity: 1,
          clipPath: `inset(250px ${cardSidePadding}px -${css.CARD_BORDER_RADIUS}px ${cardSidePadding}px round ${css.CARD_BORDER_RADIUS}px)`,
        };
        const cardActiveStyle = {
          clipPath: 'inset(0px 0px 0px 0px round 0px)',
          ease: 'none',
          duration: 1,
        };

        tl.fromTo(card, cardInactiveStyle, cardActiveStyle);
        tl.to(card, {}, 1);
      });

      const textExitStyle = {
        opacity: 0,
        transform: `translateY(-${STORY_TITLE_OFFSET}px)`,
        duration: 0.5,
        ease: 'none',
      };
      const textEnterStyle = {
        opacity: 0,
        transform: `translateY(${STORY_TITLE_OFFSET}px)`,
        duration: 0.5,
        ease: 'none',
      };
      const textActiveStyle = {
        opacity: 1,
        transform: 'translateY(0px)',
        duration: 1,
      };

      tl.to(innerTitle1, textExitStyle, 0.5);
      tl.fromTo(innerTitle2, textEnterStyle, textActiveStyle, 0.75);

      const innerTitleContainerEnd = windowHeight - (innerTitleContainer?.offsetHeight ?? 0) - 80;

      gsap.timeline({
        scrollTrigger: {
          trigger: innerTitleContainer,
          start: `top -=${FIRST_FOLD_STORY_HEIGHT}px`,
          end: `+=${innerTitleContainerEnd}px`,
          pin: true,
          scrub: true,
          pinType: 'transform',
        },
      });
    },
    {
      // biome-ignore lint/style/noNonNullAssertion: cardRef.current is not null
      scope: cardRef.current!,
      dependencies: [windowWidth, windowHeight],
      revertOnUpdate: true,
    },
  );

  return (
    <>
      <div className={css.container} ref={containerRef}>
        <div className={css.outerTitleContainer}>
          <h1 className={css.outerTitle}>{data.prismicVisionPage.data.first_fold_title_1.text}</h1>
        </div>
        <div ref={cardRef} className={css.card}>
          <video
            className={css.video}
            src={data.prismicVisionPage.data.first_fold_video1.localFile.publicURL}
            autoPlay
            muted
            loop
            playsInline
          />
          <div ref={innerTitleContainerRef} className={css.innerTitleContainer}>
            <div className={css.relative}>
              <div
                ref={innerTitle1Ref}
                className={css.innerTitle({ position: 'absolute' })}
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                {data.prismicVisionPage.data.first_fold_title_1.text}
              </div>
              <div
                className={css.innerTitle({
                  hidden: true,
                  position: 'absolute',
                  whiteSpace: 'preWrap',
                })}
              >
                {data.prismicVisionPage.data.first_fold_title_2.text}
              </div>
              <div
                ref={innerTitle2Ref}
                className={css.innerTitle({
                  whiteSpace: 'preWrap',
                })}
              >
                {data.prismicVisionPage.data.first_fold_title_2.text}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.pinSpacing} />
    </>
  );
}
