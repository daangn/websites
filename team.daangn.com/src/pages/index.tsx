import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Test = styled('div', {
  color: '$carrot500',
});

export default function IndexPage() {
  return (
    <Test>
      Hello GatsbyJS!!
    </Test>
  );
}
