import { StaticImage } from 'gatsby-plugin-image';

export default function Illustration() {
  return (
    <StaticImage alt="" src="./characters.png" loading="eager" width={360} placeholder="none" />
  );
}
