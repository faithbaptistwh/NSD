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
