import React from "react";
import styled from "styled-components";
import { State2MainContainer, ResultContainer, ResultImage, HouseResultImage, HouseResultContainer, StyledTittle } from '../State2/State2.js'

export const State3 = (props) => {
  return (
    <State2MainContainer>
      <Stage3WrapperContainer>
      <StyledTittle>YOU PICKED</StyledTittle>
        <ResultContainer color={props.colorChanger()}>
          <ResultImage src={props.imageChanger()}>
          </ResultImage>
        </ResultContainer>
        <ResultTextContainer>
          <ResultText>
            YOU WIN
          </ResultText>
          <PlayAgainButton>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultTextContainer>
        <HouseResultContainer col='3' opacity='1' color={props.houseColorChanger()}>
          <HouseResultImage src={props.houseImageChanger()}>
          </HouseResultImage>
        </HouseResultContainer>
        <StyledTittle col='3'>HOUSE PICKED</StyledTittle>
      </Stage3WrapperContainer>
    </State2MainContainer>
  );
}

const Stage3WrapperContainer = styled.div`
  height: 100%;
  width: 70vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row:  20% 80%;
  position: relative;
  place-items: center;
  align-items: flex-start;
`

const ResultTextContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  font-size: 6vh;
`
const ResultText = styled.p`
  font-size: 1em;
  font-weight:700;
  letter-spacing: 1px;
  color: white;
`

const PlayAgainButton = styled.button`
  padding: 6%;
  width: 15vw;
  border-radius: 10px;
  font-size: .3em;
  font-weight: 700;
  letter-spacing: 4px;
  background-color: WHITE;
  border: 0;
  color: gray;
  margin-top: 5%;
  cursor: pointer;
`

