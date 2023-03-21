import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled('button', {
  width: rem(34),
  height: rem(34),
  border: 'none',
  borderRadius: '50%',
  lineHeight: rem(40),
  marginBottom: rem(20),
  backgroundColor: vars.$scale.color.gray100,
  color: vars.$scale.color.gray700,
  cursor: 'pointer',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default Button;
