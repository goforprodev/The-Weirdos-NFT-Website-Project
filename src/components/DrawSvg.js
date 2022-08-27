import React from "react";
import styled from "styled-components";
import Vector from "../Icons/Vector";

const VectorContainer = styled.div`
  position: relative;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  height: 200vh;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const DrawSvg = () => {
  return (
    <VectorContainer>
      <Vector />
    </VectorContainer>
  );
};

export default DrawSvg;
