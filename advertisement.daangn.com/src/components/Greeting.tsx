import * as React from "react";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <Text>Hello, {name}!</Text>;
};

export default Greeting;

const Text = styled("p", {
  color: "$carrot500",
});
