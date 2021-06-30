import * as React from 'react';

type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({
  name,
}) => {
  return (
    <div>
      Hello, {name}!
    </div>
  );
};

export default Greeting;
