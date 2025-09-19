import { useGSAP } from '@gsap/react';
import { IconArrowRightLine } from '@karrotmarket/react-monochrome-icon';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import { useRef } from 'react';
import { useWindowSize } from 'react-use';
import Button from './Button';
import * as css from './Cartoon.css';
import Centered from './Centered';
import { MAX_WIDTH, SIDE_MARGIN } from './constants';

export const query = graphql`
  fragment TeamWebsite_Cartoon_query on Query {
    prismicVisionPage {
      data {
        cartoon_title {
          text
        }
        cartoon_video {
          localFile {
            publicURL
          }
        }
        cartoon_button_label {
          text
        }
        cartoon_button_link {
          url
        }
      }
    }
  }
`;

type Props = {
  query: GatsbyTypes.TeamWebsite_Cartoon_queryFragment,
}

export default function Cartoon({ query: data }: Props) {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const videoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      const button = buttonRef.current;

      const cardSidePadding =
        windowWidth > MAX_WIDTH + SIDE_MARGIN * 2 ? (windowWidth - MAX_WIDTH) / 2 : SIDE_MARGIN;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: 'center bottom',
          end: 'center top',
          scrub: true,
        },
      });

      tl.fromTo(
        video,
        {
          clipPath: 'inset(0px 0px 0px 0px round 0px)',
        },
        {
          clipPath: `inset(0px ${cardSidePadding}px 0px ${cardSidePadding}px round 20px)`,
          duration: 1,
        },
      );

      tl.fromTo(
        button,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.15,
        },
        0,
      );

      tl.fromTo(
        button,
        {
          transform: 'translate(-50%, 0)',
        },
        {
          transform: 'translate(-50%, -64px)',
          duration: 1,
        },
        0,
      );
    },
    {
      dependencies: [windowWidth, windowHeight],
      revertOnUpdate: true,
    },
  );

  return (
    <div className={css.container}>
      <Centered>
        <div className={css.title}>
          <span>{data.prismicVisionPage.data.cartoon_title.text}</span>
        </div>
      </Centered>
      <div className={css.videoContainer} ref={videoRef}>
        <video
          className={css.video}
          src={data.prismicVisionPage.data.cartoon_video.localFile.publicURL}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={css.buttonContainer} ref={buttonRef}>
          <Button
            href={data.prismicVisionPage.data.cartoon_button_link?.url}
            target="_blank"
            icon={<IconArrowRightLine size={18} />}
          >
            {data.prismicVisionPage.data.cartoon_button_label.text}
          </Button>
        </div>
      </div>
    </div>
  );
}
