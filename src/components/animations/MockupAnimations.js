import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <MockupArea>
        <Cross src="images/icons/cross.svg" />
      </MockupArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    transform: scale(0.6) translateX(-175px);
    transform-origin: top left;
  }

  @media (max-width: 450px) {
    transform: scale(0.4) translateX(-125px);
    transform-origin: top left;
  }

  div {
    transform-origin: bottom left;
  }
`

const MockupArea = styled.div`
  position: absolute;
  width: 701px;
  height: 428px;
  left: 214px;
  top: 0px;

  background: rgba(23, 12, 61, 0.5);
  box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 701px auto;
  align-content: center;
`

const Cross = styled.img`
  width: 300x;
  height: 300px;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  opacity: 0.9;
`
