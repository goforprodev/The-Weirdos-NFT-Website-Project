import React from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  border-bottom: 3px solid ${(props) => props.theme.text};
  margin: 1rem auto;
  width: fit-content;
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: grid;
  place-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: grid;
  place-items: center;
`;

const Roadmap = () => {
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
      </Container>
    </Section>
  );
};

export default Roadmap;
