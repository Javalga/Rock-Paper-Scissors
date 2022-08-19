import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { randomInt } from "mathjs";
import { State1 } from './State1/State1.js'
import { State2 } from './State2/State2.js'
import { State3 } from './State3/State3.js'
import iconPaper from '../../images/icon-paper.svg'
import iconRock from '../../images/icon-rock.svg'
import iconScissors from '../../images/icon-scissors.svg'

export const Playground = () => {

  const [playgroundState, setPlaygroundState] = useState(1)

  const [pickedOption, setPickedOption] = useState(0)

  const [opacity, setOpacity] = useState(false)

  const housePicked = randomInt(1, 4)

  

  useEffect(() => {
    console.log(housePicked)
  }, [housePicked])

  useEffect(() => {
    console.log(pickedOption)
  }, [pickedOption])


  

  const handlePickOption = (e) => {
    setPlaygroundState(playgroundState => playgroundState = 2)
    if (e.target === paper.current) {
      setPickedOption(pickedOption => pickedOption = 'paper')
    } else if (e.target === rock.current) {
      setPickedOption(pickedOption => pickedOption = 'rock')
    } else if (e.target === scissors.current) {
      setPickedOption(pickedOption => pickedOption = 'scissors')
    }
  }

  /* COLOR AND IMAGE CHANGERS FOR STATE 2 AND 3 */

  const colorChanger = () => {
    if (pickedOption === 'paper') {
      return ('#4D6AF4');
    } else if (pickedOption === 'rock') {
      return ('#E43F5A');
    } else if (pickedOption === 'scissors') {
      return ('#EBA722')
    };
  };
  const imageChanger = () => {
    if (pickedOption === 'paper') {
      return (iconPaper);
    } else if (pickedOption === 'rock') {
      return (iconRock);
    } else if (pickedOption === 'scissors') {
      return (iconScissors)
    };
  }

  const houseColorChanger = () => {
    if (housePicked === 1) {
      return ('#4D6AF4');
    } else if (housePicked === 2) {
      return ('#E43F5A');
    } else if (housePicked === 3) {
      return ('#EBA722')
    };
  };

  const houseImageChanger = () => {
    if (housePicked === 1) {
      return (iconPaper);
    } else if (housePicked === 2) {
      return (iconRock);
    } else if (housePicked === 3) {
      return (iconScissors)
    };
  }

  /* REFS */

  const paper = useRef(null)
  const rock = useRef(null)
  const scissors = useRef(null)

  if (playgroundState === 1) {
    return (
      <PlaygroundMainContainer>
        <State1
          iconPaper={iconPaper}
          iconRock={iconRock}
          iconScissors={iconScissors}
          handlePickOption={handlePickOption}
          refPaper={paper}
          refRock={rock}
          refScissors={scissors}>
        </State1>
      </PlaygroundMainContainer>
    );
  } else if (playgroundState === 2) {
    return (
      <PlaygroundMainContainer>
        <State2
          iconPaper={iconPaper}
          iconRock={iconRock}
          iconScissors={iconScissors}
          pickedOption={pickedOption}
          housePicked={housePicked}
          setPlaygroundState={()=>{setPlaygroundState(playgroundState=>playgroundState=3)}}
          opacity={opacity}
          setOpacity={setOpacity}
          houseColorChanger={houseColorChanger}
          houseImageChanger={houseImageChanger}
          colorChanger={colorChanger}
          imageChanger={imageChanger}>
        </State2>
      </PlaygroundMainContainer>
    )
  } else if (playgroundState === 3) {
    return (
      <PlaygroundMainContainer>
        <State3
          iconPaper={iconPaper}
          iconRock={iconRock}
          iconScissors={iconScissors}
          opacity={opacity}
          houseColorChanger={houseColorChanger}
          houseImageChanger={houseImageChanger}
          colorChanger={colorChanger}
          imageChanger={imageChanger}>
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