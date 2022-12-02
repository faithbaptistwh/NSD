import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Next Step Discipleship</Title>
          <Description>
            Welcome to NSD, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Sed adipiscing diam donec adipiscing tristique risus nec
            feugiat.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  color: white;
`

const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`
