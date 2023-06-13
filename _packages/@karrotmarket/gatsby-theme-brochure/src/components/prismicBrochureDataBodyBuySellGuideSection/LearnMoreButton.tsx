import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const LearnMoreButton = styled('a', {
  fontSize: rem(24),
  fontWeight: "bold",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  textAlign: "center",
  "& > svg": {
    marginLeft: ".5rem",
  },
});

export default LearnMoreButton;
