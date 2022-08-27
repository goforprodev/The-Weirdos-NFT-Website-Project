import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import Carousel from "../Carousel";
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  width: 80%;
  align-self: flex-start;
  margin: 0 auto;
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

const SubTitleText = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  opacity: 0.6;
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome To The Weirdos Club.</Title>
          <SubText>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTitleText>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTitleText>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text={"JOIN OUR DISCORD"} link="#discord" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
