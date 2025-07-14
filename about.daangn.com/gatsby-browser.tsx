export { wrapRootElement } from '@karrotmarket/gatsby-theme-prismic/src/wrapRootElement';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
