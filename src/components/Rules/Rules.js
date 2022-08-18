import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ImageRules from '../../images/image-rules.svg';
import CloseIcon from '../../images/icon-close.svg';

export const Rules = () => {
  const [showRules, setShowRules] = useState(false)
  useEffect(
    ()=>{
      console.log(showRules);
    },[Rules]
  )
  if (showRules === false) {
    return (
      <RulesButton onClick={()=>{setShowRules(showRules => !showRules)}}>
        <p>RULES</p>
      </RulesButton>
    );
  } else if (showRules === true) {
    return (
      <>
      <RulesButton onClick={()=>{setShowRules(showRules => !showRules)}}>
        <p>RULES</p>
      </RulesButton>
      <DarkBackground>
      </DarkBackground>
      <RulesContainer>
        <HeaderRulesContainer>
          <p>RULES</p>
          <img src={CloseIcon} onClick={()=>{setShowRules(showRules => !showRules)}}></img>
        </HeaderRulesContainer>
        <img src={ImageRules}></img>
      </RulesContainer>
      </>
    );
  }
}

const RulesButton = styled.button`
  position: absolute;
  border: 0;
  background-color: rgb(255,255,255,0);
  outline: 3px solid white;
  width: 10%;
  height: 6%;
  bottom: 4%;
  right: 3%;
  border-radius: 10px;
  cursor: pointer;
  z-index: 99;
  p{
    font-size: 1vw;
    font-weight:600;
    color: white;
    letter-spacing: 4px
  };
`

const RulesContainer = styled.div`
  width: 60vh;
  height: 60vh;
  border-radius: 25px;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 2%;
  z-index:999;
  align-items:center;
  img{
    height: 80%;
    width: 80%;
  }
`

const HeaderRulesContainer = styled.div`
  height: 20%;
  width: 100%;
  display:flex;
  justify-content: space-between;
  p{
    font-size: 2vw;
    color: #3C4262;
    font-weight: 700;
  }
  img{
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`

const DarkBackground = styled.div`
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity:.7;
`