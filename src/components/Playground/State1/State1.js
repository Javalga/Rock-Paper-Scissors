import React from "react";
import styled from "styled-components";
import Triangle from '../../../images/bg-triangle.svg'


export const State1 = (props) => {
  return (
    <State1MainContainer>
      <OptionWrapperContainer>
        <OptionContainer color='#4D6AF4' top='0' left='0'>
          <OptionImage src={props.iconPaper} onClick={props.handlePickOption} ref={props.refPaper}></OptionImage>
        </OptionContainer>
        <OptionContainer color='#E43F5A' flexEnd bottom='10%' left='0' right='0' margin='auto'>
          <OptionImage src={props.iconRock} onClick={props.handlePickOption} ref={props.refRock}></OptionImage>
        </OptionContainer>
        <OptionContainer color="#EBA722" top='0' right='0'>
          <OptionImage src={props.iconScissors} onClick={props.handlePickOption} ref={props.refScissors}></OptionImage>
        </OptionContainer>
          
      </OptionWrapperContainer>
    </State1MainContainer>
  );
}

const State1MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-image: url(${Triangle});
  background-repeat: no-repeat;
  background-position:center;
  background-size: 40vh;
`

const OptionWrapperContainer = styled.div`
  height: 55vh;
  width: 55vh;
  display: flex;
  position: relative;
`
const OptionContainer = styled.div`
  height: 23vh;
  width: 23vh;
  background-color:${props => props.color};
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  margin: ${props => props.margin};
  -webkit-box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  -moz-box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  box-shadow: inset -1px -15px 0px 0px rgba(0,0,0,0.20);
  z-index: 9;
`

const OptionImage = styled.img`
  height: 17vh;
  width: 17vh;
  background-color: white;
  border-radius: 50%;
  padding: 5vh;
  cursor: pointer;
  -webkit-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  -moz-box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  box-shadow: inset -1px 11px 0px 1px rgba(0,0,0,0.28);
  transition: 80ms;
  z-index: 9;

  &:active{
    -webkit-box-shadow: inset -1px 15px 0px 5px rgba(0,0,0,0.3); 
    box-shadow: inset -1px 15px 0px 5px rgba(0,0,0,0.3);
    transform: scale(0.98);
  }
` 