import { useGSAP } from '@gsap/react';
import { IconArrowRightLine } from '@karrotmarket/react-monochrome-icon';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import { useRef } from 'react';
import Button from './Button';
import Centered from './Centered';
import * as css from './UserStory.css';
import { media, show } from './media.css';

export const query = graphql`
  fragment TeamWebsite_UserStory_query on Query {
    prismicVisionPage {
      data {
        user_story_title {
          text
        }
        user_story_subtitle {
          text
        }

        # User Story 1
        user_story_1_title {
          text
        }
        user_story_1_description {
          text
        }
        user_story_1_video {
          localFile {
            publicURL
          }
        }
        user_story_1_badge {
          text
        }
        user_story_1_button_label {
          text
        }
        user_story_1_link {
          url
        }

        # User Story 2
        user_story_2_title {
          text
        }
        user_story_2_description {
          text
        }
        user_story_2_video {
          localFile {
            publicURL
          }
        }
        user_story_2_badge {
          text
        }
        user_story_2_button_label {
          text
        }
        user_story_2_link {
          url
        }

        # User Story 3
        user_story_3_title {
          text
        }
        user_story_3_description {
          text
        }
        user_story_3_video {
          localFile {
            publicURL
          }
        }
        user_story_3_badge {
          text
        }
        user_story_3_button_label {
          text
        }
        user_story_3_link {
          url
        }

        # User Story 4
        user_story_4_title {
          text
        }
        user_story_4_description {
          text
        }
        user_story_4_video {
          localFile {
            publicURL
          }
        }
        user_story_4_badge {
          text
        }
        user_story_4_button_label {
          text
        }
        user_story_4_link {
          url
        }
      }
    }
  }
`;

type Props = {
  query: GatsbyTypes.TeamWebsite_UserStory_queryFragment;
};

export default function UserStory({ query: data }: Props) {
  const stories = [
    {
      title: data.prismicVisionPage.data.user_story_1_title.text,
      description: data.prismicVisionPage.data.user_story_1_description.text,
      video: data.prismicVisionPage.data.user_story_1_video.localFile.publicURL,
      badge: data.prismicVisionPage.data.user_story_1_badge.text,
      button: data.prismicVisionPage.data.user_story_1_button_label.text,
      link: data.prismicVisionPage.data.user_story_1_link?.url,
    },
    {
      title: data.prismicVisionPage.data.user_story_2_title.text,
      description: data.prismicVisionPage.data.user_story_2_description.text,
      video: data.prismicVisionPage.data.user_story_2_video.localFile.publicURL,
      badge: data.prismicVisionPage.data.user_story_2_badge.text,
      button: data.prismicVisionPage.data.user_story_2_button_label.text,
      link: data.prismicVisionPage.data.user_story_2_link?.url,
    },
    {
      title: data.prismicVisionPage.data.user_story_3_title.text,
      description: data.prismicVisionPage.data.user_story_3_description.text,
      video: data.prismicVisionPage.data.user_story_3_video.localFile.publicURL,
      badge: data.prismicVisionPage.data.user_story_3_badge.text,
      button: data.prismicVisionPage.data.user_story_3_button_label.text,
      link: data.prismicVisionPage.data.user_story_3_link?.url,
    },
    {
      title: data.prismicVisionPage.data.user_story_4_title.text,
      description: data.prismicVisionPage.data.user_story_4_description.text,
      video: data.prismicVisionPage.data.user_story_4_video.localFile.publicURL,
      badge: data.prismicVisionPage.data.user_story_4_badge.text,
      button: data.prismicVisionPage.data.user_story_4_button_label.text,
      link: data.prismicVisionPage.data.user_story_4_link?.url,
    },
  ];

  const rootRef = useRef<HTMLDivElement>(null);

  const centerTextRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const imageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const imageBottomRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useGSAP(() => {
    const root = rootRef.current;

    const centerText1 = centerTextRefs[0].current;
    const centerText2 = centerTextRefs[1].current;
    const centerText3 = centerTextRefs[2].current;
    const centerText4 = centerTextRefs[3].current;

    const image1 = imageRefs[0].current;
    const image2 = imageRefs[1].current;
    const image3 = imageRefs[2].current;
    const image4 = imageRefs[3].current;

    const imageBottom1 = imageBottomRefs[0].current;
    const imageBottom2 = imageBottomRefs[1].current;
    const imageBottom3 = imageBottomRefs[2].current;
    const imageBottom4 = imageBottomRefs[3].current;

    const mm = gsap.matchMedia();

    mm.add(media.base, () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'center center',
          end: '+=3000px',
          pin: true,
          pinSpacing: true,
          scrub: true,
          pinType: 'fixed',
        },
      });

      const activeTextStyle = {
        opacity: 1,
        transform: 'translateY(0)',
        duration: 1,
        ease: 'none',
      };
      const inactiveTextStyle = {
        opacity: 0,
        transform: 'translateY(-48px)',
        duration: 1,
        ease: 'none',
      };
      const activeImageStyle = {
        transform: 'translateY(0)',
        duration: 1.5,
        ease: 'none',
      };
      const inactiveImageStyle = {
        transform: 'translateY(-100%)',
        duration: 1.5,
        ease: 'none',
      };
      const activeImageBottomStyle = {
        duration: 2,
        display: 'flex',
        ease: 'none',
      };
      const inactiveImageBottomStyle = {
        display: 'none',
        ease: 'none',
      };

      let base = 0;
      tl.to(centerText1, activeTextStyle, base);
      tl.to(centerText1, activeTextStyle, base + 0.5);
      tl.to(centerText1, inactiveTextStyle, base + 2);
      tl.to(image1, activeImageStyle, base);
      tl.to(imageBottom1, activeImageBottomStyle, base);

      base += 2.5;
      tl.to(centerText2, activeTextStyle, base);
      tl.to(centerText2, activeTextStyle, base + 0.5);
      tl.to(centerText2, inactiveTextStyle, base + 2);
      tl.to(image1, inactiveImageStyle, base - 0.5);
      tl.to(image2, activeImageStyle, base - 0.5);
      tl.to(imageBottom1, inactiveImageBottomStyle, base - 0.5);
      tl.to(imageBottom2, activeImageBottomStyle, base);

      base += 2.5;
      tl.to(centerText3, activeTextStyle, base);
      tl.to(centerText3, activeTextStyle, base + 0.5);
      tl.to(centerText3, inactiveTextStyle, base + 2);
      tl.to(image2, inactiveImageStyle, base - 0.5);
      tl.to(image3, activeImageStyle, base - 0.5);
      tl.to(imageBottom2, inactiveImageBottomStyle, base - 0.5);
      tl.to(imageBottom3, activeImageBottomStyle, base);

      base += 2.5;
      tl.to(centerText4, activeTextStyle, base);
      tl.to(centerText4, activeTextStyle, base + 0.5);
      tl.to(image3, inactiveImageStyle, base - 0.5);
      tl.to(image4, activeImageStyle, base - 0.5);
      tl.to(imageBottom3, inactiveImageBottomStyle, base - 0.5);
      tl.to(imageBottom4, activeImageBottomStyle, base);
    });
  });

  return (
    <div className={css.root}>
      <Centered ref={rootRef}>
        <div className={css.container}>
          <div className={css.left}>
            <div className={css.titles}>
              <div className={css.subtitle}>
                {data.prismicVisionPage.data.user_story_subtitle.text}
              </div>
              <div className={css.title}>{data.prismicVisionPage.data.user_story_title.text}</div>
            </div>
            <div className={show({ when: 'base', grow: true })}>
              {stories.map((d, i) => (
                <div
                  key={d.title}
                  className={css.centerText({
                    position: i === 0 ? 'first' : undefined,
                  })}
                  ref={centerTextRefs[i]}
                >
                  <div className={css.centerTextTitle}>{d.title}</div>
                  <div className={css.centerTextDescription}>{d.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={css.videos}>
            {stories.map((d, i) => (
              <div
                key={d.title}
                className={css.videoContainer({
                  position: i === 0 ? 'first' : undefined,
                })}
                ref={imageRefs[i]}
              >
                <video className={css.video} src={d.video} autoPlay muted loop playsInline />
              </div>
            ))}
            {stories.map((d, i) => (
              <div
                key={d.title}
                className={css.imageBottom({
                  position: i === 0 ? 'first' : undefined,
                })}
                ref={imageBottomRefs[i]}
                style={{
                  zIndex: stories.length - i,
                }}
              >
                <div className={css.imageLeftBadge}>{d.badge}</div>
                <a className={css.imageRightButton} href={d.link} target="_blank" rel="noreferrer">
                  {d.button} <IconArrowRightLine width={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Centered>
      <div className={show({ when: 'medium' })}>
        {stories.map((d) => (
          <div className={css.userStoryCard} key={d.title}>
            <div className={css.userStoryCardVideoContainer}>
              <video
                className={css.userStoryCardVideo}
                src={d.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className={css.userStoryCardContent}>
              <div className={css.userStoryCardTitle}>{d.title}</div>
              <div className={css.userStoryCardDescription}>{d.description}</div>
              <Button href={d.link} target="_blank" icon={<IconArrowRightLine width={18} />}>
                {d.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
