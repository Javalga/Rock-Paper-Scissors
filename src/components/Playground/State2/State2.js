import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

export const State2 = (props) => {

  const setStateCallback = () => {
    console.log('heu')
    setTimeout(() => {
      console.log('hey')
      props.setPlaygroundState()
    },5000)
  }
  useEffect(()=>{
    setTimeout(()=>{
      props.setOpacity(true);setStateCallback()},2000); 
  },[State2MainContainer])

  return (
    <State2MainContainer>
      <ResultWrapperContainer>
        <StyledTittle>YOU PICKED</StyledTittle>
        <ResultContainer color={props.colorChanger()}>
          <ResultImage src={props.imageChanger()}>
          </ResultImage>
        </ResultContainer>
        <HouseResultContainer color={props.houseColorChanger()} opacity={props.opacity ? 1 : 0} onTransitionEnd={setStateCallback} col='2' transition=' 2s linear all;'>
          <HouseResultImage src={props.houseImageChanger()}>
          </HouseResultImage>
        </HouseResultContainer>
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
  width: 55vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row:  20% 80%;
  position: relative;
  place-items: center;
  align-items: flex-start;
`

export const ResultContainer = styled.div`
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

export const ResultImage = styled.img`
  height: 25vh;
  width: 25vh;
  background-color: white;
  border-radius: 50%;
  padding: 5vh;
  -webkit-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  -moz-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
`

export const HouseResultContainer = styled.div`
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
  transition:${props => props.transition}
  opacity: ${props => props.opacity};
`

export const HouseResultImage = styled.img`
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