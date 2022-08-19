import React from "react";
import styled from "styled-components";
import { State1 } from './State1/State1.js'
import { State2 } from './State2/State2.js'
import { State3 } from './State3/State3.js'


export const Playground = (props) => {
  if (props.playgroundState === 1) {
    return (
      <PlaygroundMainContainer>
        <State1
          iconPaper={props.iconPaper}
          iconRock={props.iconRock}
          iconScissors={props.iconScissors}
          handlePickOption={props.handlePickOption}
          refPaper={props.paper}
          refRock={props.rock}
          refScissors={props.scissors}>
        </State1>
      </PlaygroundMainContainer>
    );
  } else if (props.playgroundState === 2) {
    return (
      <PlaygroundMainContainer>
        <State2
          iconPaper={props.iconPaper}
          iconRock={props.iconRock}
          iconScissors={props.iconScissors}
          pickedOption={props.pickedOption}
          housePicked={props.housePicked}
          setPlaygroundState={() => { props.setPlaygroundState(playgroundState => playgroundState = 3) }}
          opacity={props.opacity}
          setOpacity={props.setOpacity}
          houseColorChanger={props.houseColorChanger}
          houseImageChanger={props.houseImageChanger}
          colorChanger={props.colorChanger}
          imageChanger={props.imageChanger}
          setStateCallback={props.setStateCallback}>
        </State2>
      </PlaygroundMainContainer>
    )
  } else if (props.playgroundState === 3) {
    return (
      <PlaygroundMainContainer>
        <State3
          iconPaper={props.iconPaper}
          iconRock={props.iconRock}
          iconScissors={props.iconScissors}
          opacity={props.opacity}
          houseColorChanger={props.houseColorChanger}
          houseImageChanger={props.houseImageChanger}
          colorChanger={props.colorChanger}
          imageChanger={props.imageChanger}
          playAgain={props.playAgain}
          resultText={props.resultText}>
        </State3>
      </PlaygroundMainContainer>
    )
  }
}

const PlaygroundMainContainer = styled.div`
  position: relative;
  display:flex;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  z-index: 9;
`