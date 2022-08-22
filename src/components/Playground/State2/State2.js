import React from "react";
import styled from "styled-components";

export const State2 = (props) => {
  return (
    <State2MainContainer>
      <ResultWrapperContainer animation={props.animation}>
        <StyledTittle>YOU PICKED</StyledTittle>
        <PlayerOptionContainer color={props.colorChanger()}>
          <PlayerOptionImage src={props.imageChanger()}>
          </PlayerOptionImage>
        </PlayerOptionContainer>
        <HouseOptionContainer color={props.houseColorChanger()} opacity={props.opacity ? 1 : 1} col='2' transition='2s linear all;'>
          <HouseOptionImage src={props.houseImageChanger()}>
          </HouseOptionImage>
        </HouseOptionContainer>
        <StyledTittle col='2'>HOUSE PICKED</StyledTittle>
      </ResultWrapperContainer>
    </State2MainContainer>
  )
}

export const State2MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const ResultWrapperContainer = styled.div`
  height: 100%;
  width: ${props => props.animation ? '93.3vw' : '55vw'};
  transition: 1500ms ease-in-out all;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row:  20% 80%;
  position: relative;
  place-items: center;
  align-items: flex-start;
`

export const PlayerOptionContainer = styled.div`
  height: 35vh;
  width: 35vh;
  background-color:${props => props.color};
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  -moz-box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  grid-column:1;
`

export const PlayerOptionImage = styled.img`
  height: 25vh;
  width: 25vh;
  background-color: white;
  border-radius: 50%;
  padding: 5vh;
  -webkit-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  -moz-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
`

export const HouseOptionContainer = styled.div`
  grid-column:2;
  height: 35vh;
  width: 35vh;
  background-color:${props => props.color};
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  -moz-box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  grid-column:${props => props.col};
  transition:${props => props.transition};
  opacity: ${props => props.opacity};
`

export const HouseOptionImage = styled.img`
  height: 25vh;
  width: 25vh;
  background-color: white;
  border-radius: 50%;
  padding: 5vh;
  -webkit-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  -moz-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
`

export const StyledTittle = styled.p`
  grid-column: ${props => props.col};
  grid-row: 1;
  align-self: center;
  font-size: 3vh;
  color: white;
  letter-spacing: 2px;
`