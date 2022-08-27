import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
`;
const TypewriterText = () => {
  return (
    <Title>
      Discover A New Era Of Cool
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World!")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </Title>
  );
};

export default TypewriterText;
