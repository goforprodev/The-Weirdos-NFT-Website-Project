import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Container80 = styled.div`
width:80%;
align-self:flex-start
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  span {
    text-transform: uppercase;
    font-family: "Akaya Talivigala", cursive;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }
`;

const Subtitle = styled.h2`
font-size:${(props) => props.theme.fontlg};
text-transform:capitalize;
color:${(props) => `rgba(${props.theme.textRgba}),0.6`};
font-weight:600;
margin-bottom:1rem;
`

const TypewriterText = () => {
  return (
    <Container80>
    <Title>
      Discover A New Era Of Cool
      <Typewriter
        options={{
          autostart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class="text-1">Nfts.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Collectible Items.</span>')
            .pauseFor(200)
            .deleteAll()
            .typeString('<span class="text-3">Ape Killers.</span>')
            .start();
        }}
      />
    </Title>
    <Subtitle>Bored Of Apes? Try Something New.</Subtitle>
    <Button text={"Explore"} link="#about"/>
    </Container80>
  );
};

export default TypewriterText;
