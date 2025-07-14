import Marquee from 'react-fast-marquee';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Centered from './Centered';
import * as css from './Statement.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Statement() {
  // biome-ignore lint/suspicious/noExplicitAny: typegen이 동작을 안함
  const data = useStaticQuery<any>(graphql`
    query Statement {
      prismicVisionPage {
        data {
          statement_text_1 {
            text
          }
          statement_text_2 {
            text
          }
          statement_text_3 {
            text
          }
          statement_text_4 {
            text
          }
          statement_image_1 {
            localFile {
              id
            }
            alt
            gatsbyImageData
          }
          statement_image_2 {
            localFile {
              id
            }
            alt
            gatsbyImageData
          }
          statement_image_3 {
            localFile {
              id
            }
            alt
            gatsbyImageData
          }
          statement_image_4 {
            localFile {
              id
            }
            alt
            gatsbyImageData
          }
          statement_image_5 {
            localFile {
              id
            }
            alt
            gatsbyImageData
          }
          statement_image_6 {
            localFile {
              id
            }
            alt
            gatsbyImageData
          }
          statement_image_7 {
            localFile {
              id
            }
            alt
            gatsbyImageData
          }
        }
      }
    }
  `);

  const images = [
    {
      id: data.prismicVisionPage.data.statement_image_1.localFile.id,
      image: data.prismicVisionPage.data.statement_image_1.gatsbyImageData,
      alt: data.prismicVisionPage.data.statement_image_1.alt,
      type: 'horizontal' as const,
    },
    {
      id: data.prismicVisionPage.data.statement_image_2.localFile.id,
      image: data.prismicVisionPage.data.statement_image_2.gatsbyImageData,
      alt: data.prismicVisionPage.data.statement_image_2.alt,
      type: 'vertical' as const,
    },
    {
      id: data.prismicVisionPage.data.statement_image_3.localFile.id,
      image: data.prismicVisionPage.data.statement_image_3.gatsbyImageData,
      alt: data.prismicVisionPage.data.statement_image_3.alt,
      type: 'square' as const,
    },
    {
      id: data.prismicVisionPage.data.statement_image_4.localFile.id,
      image: data.prismicVisionPage.data.statement_image_4.gatsbyImageData,
      alt: data.prismicVisionPage.data.statement_image_4.alt,
      type: 'vertical' as const,
    },
    {
      id: data.prismicVisionPage.data.statement_image_5.localFile.id,
      image: data.prismicVisionPage.data.statement_image_5.gatsbyImageData,
      alt: data.prismicVisionPage.data.statement_image_5.alt,
      type: 'square' as const,
    },
    {
      id: data.prismicVisionPage.data.statement_image_7.localFile.id,
      image: data.prismicVisionPage.data.statement_image_7.gatsbyImageData,
      alt: data.prismicVisionPage.data.statement_image_7.alt,
      type: 'vertical' as const,
    },
  ];

  const rootRef = useRef<HTMLDivElement>(null);

  const statement1Ref = useRef<HTMLSpanElement>(null);
  const statement2Ref = useRef<HTMLSpanElement>(null);
  const statement3Ref = useRef<HTMLSpanElement>(null);
  const statement4Ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    const statement1 = statement1Ref.current;
    const statement2 = statement2Ref.current;
    const statement3 = statement3Ref.current;
    const statement4 = statement4Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: '+=2000px',
        pin: true,
        pinSpacing: true,
        scrub: true,
        pinType: 'fixed',
      },
    });

    tl.to(statement1, { color: '#1A1C20', duration: 1 }, 0);
    tl.to(statement1, { color: '#1A1C20', duration: 1 }, 1);
    tl.to(statement1, { color: '#D1D3D8', duration: 1 }, 2);

    tl.to(statement2, { color: '#1A1C20', duration: 1 }, 2);
    tl.to(statement2, { color: '#1A1C20', duration: 1 }, 3);
    tl.to(statement2, { color: '#D1D3D8', duration: 1 }, 4);

    tl.to(statement3, { color: '#1A1C20', duration: 1 }, 4);
    tl.to(statement3, { color: '#1A1C20', duration: 1 }, 5);
    tl.to(statement3, { color: '#D1D3D8', duration: 1 }, 6);

    tl.to(statement4, { color: '#1A1C20', duration: 1 }, 6);
    tl.to(statement4, { color: '#1A1C20', duration: 1 }, 7);
    tl.to(statement4, { color: '#D1D3D8', duration: 1 }, 8);
  });

  return (
    <div ref={rootRef} className={css.root}>
      <Centered>
        <div className={css.container}>
          <div className={css.title}>
            <span ref={statement1Ref} className={css.titleFrag}>
              {data.prismicVisionPage.data.statement_text_1.text}{' '}
            </span>
            <span ref={statement2Ref} className={css.titleFrag}>
              {data.prismicVisionPage.data.statement_text_2.text}{' '}
            </span>
            <span ref={statement3Ref} className={css.titleFrag}>
              {data.prismicVisionPage.data.statement_text_3.text}{' '}
            </span>
            <span ref={statement4Ref} className={css.titleFrag}>
              {data.prismicVisionPage.data.statement_text_4.text}
            </span>
          </div>
        </div>
      </Centered>
      <Marquee className={css.marquee}>
        <div className={css.marqueeInner}>
          {images.map((image) => (
            <div key={image.id} className={css.card({ type: image.type })}>
              <GatsbyImage image={image.image} alt={image.alt} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
