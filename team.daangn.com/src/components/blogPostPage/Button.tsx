import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled('button', {
  width: rem(32),
  height: rem(32),
  border: 'none',
  borderRadius: '50%',
  lineHeight: rem(40),
  marginBottom: rem(20),
  backgroundColor: vars.$scale.color.gray50,
  color: vars.$scale.color.gray700,
  cursor: 'pointer',
});

export default Button;
