import './App.css';
import { Header } from './components/Header/Header.js';
import { Rules } from './components/Rules/Rules.js';
import { Playground } from './components/Playground/Playground.js';
import { randomInt } from "mathjs";
import { useRef, useState, useEffect, useCallback } from 'react';
import iconPaper from './images/icon-paper.svg';
import iconRock from './images/icon-rock.svg';
import iconScissors from './images/icon-scissors.svg';

function App() {
  // useState
  const [housePicked, setHousePick] = useState(randomInt(1, 4));
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [playgroundState, setPlaygroundState] = useState(1);
  const [pickedOption, setPickedOption] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [opacity, setOpacity] = useState(false)
  const [renderCount, setRenderCount] = useState(0)
    
  const playAgain = () => {
    setHousePick(randomInt(1, 4));
    setPlaygroundState(playgroundState => playgroundState = 1);
    setOpacity(false)
    clearTimeout()
  };

  const resultText = useCallback(() => {
    if (result === 'tie') {
      return ('IT\'S A TIE');
    } else if (result === 'win') {
      return ('YOU WIN');
    } else if (result === 'lose') {
      return ('YOU LOSE');
    } else if (null) {
      return (null);
    };
  }, [result]);

  //useRef
  const state2 = useRef(null);
  const paper = useRef(null);
  const rock = useRef(null);
  const scissors = useRef(null);

  //PLAYER PICK HANDLER

  const handlePickOption = useCallback((e) => {
    setTimeout(() => {
      setAnimation(animation => animation = true)
    }, 100)
    setRenderCount(renderCount => renderCount = 1)
    setPlaygroundState(playgroundState => playgroundState = 2);
    if (e.target === paper.current) {
      setPickedOption(pickedOption => pickedOption = 'paper');
    } else if (e.target === rock.current) {
      setPickedOption(pickedOption => pickedOption = 'rock');
    } else if (e.target === scissors.current) {
      setPickedOption(pickedOption => pickedOption = 'scissors');
    }
  }, [])

  /* COLOR AND IMAGE CHANGERS FOR STATE 2 AND 3 */

  const colorChanger = () => {
    if (pickedOption === 'paper') {
      return ('#4D6AF4');
    } else if (pickedOption === 'rock') {
      return ('#E43F5A');
    } else if (pickedOption === 'scissors') {
      return ('#EBA722');
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
      return ('#EBA722');
    };
  };

  const houseImageChanger = () => {
    if (housePicked === 1) {
      return (iconPaper);
    } else if (housePicked === 2) {
      return (iconRock);
    } else if (housePicked === 3) {
      return (iconScissors);
    };
  }
  //logs
  useEffect(() => {
    console.log(`Se ha asignado un nuevo valor a housePicked y es ${housePicked}`);
  }, [housePicked])
  useEffect(() => {
    console.log(`Se ha asignado un nuevo valor a score y es ${score}`);
  }, [score])
  useEffect(() => {
    console.log(`Se ha asignado un nuevo valor a result y es ${result}`);
  }, [result])
  useEffect(() => {
    console.log(`Se ha asignado un nuevo valor a playgroundState y es ${playgroundState}`);
  }, [playgroundState])
  useEffect(() => {
    console.log(`Se ha asignado un nuevo valor a pickedOption y es ${pickedOption}`);
  }, [pickedOption])

  const ResultCalculator = useCallback(() => {
    if (pickedOption === 'paper' && housePicked === 1) {
      setResult('tie');
      console.log('el score no cambia')
    } else if (pickedOption === 'paper' && housePicked === 2) {
      setResult('win');
      setScore(score => score + 1);
      console.log('score + 1');
    } else if (pickedOption === 'paper' && housePicked === 3) {
      setResult('lose');
      setScore(score => score - 1);
    } else if (pickedOption === 'rock' && housePicked === 1) {
      setResult('lose');
      setScore(score => score - 1);
      console.log('score - 1');
    } else if (pickedOption === 'rock' && housePicked === 2) {
      setResult('tie');
    } else if (pickedOption === 'rock' && housePicked === 3) {
      setResult('win');
      setScore(score => score + 1)
    } else if (pickedOption === 'scissors' && housePicked === 1) {
      setResult('win');
      setScore(score => score + 1);
    } else if (pickedOption === 'scissors' && housePicked === 2) {
      setResult('lose');
      setScore(score => score - 1);
    } else if (pickedOption === 'scissors' && housePicked === 3) {
      setResult('tie');
    }
  }, [housePicked, pickedOption]);


  const setStateCallback = useEffect(() => {
    if(renderCount > 0){
      setTimeout(() => {
        setPlaygroundState(3);
        ResultCalculator()
        setAnimation(animation => animation = false)
        setTimeout(() => { setOpacity(opacity => opacity = true) }, 10)
      }, 1500);
      clearTimeout()
    }
  }, [pickedOption])
  return (
    <div className="App">
      <Header score={score}></Header>
      <Rules></Rules>
      <Playground housePicked={housePicked}
        paper={paper}
        rock={rock}
        scissors={scissors}
        playgroundState={playgroundState}
        setPlaygroundState={setPlaygroundState}
        iconPaper={iconPaper}
        iconRock={iconRock}
        iconScissors={iconScissors}
        handlePickOption={handlePickOption}
        colorChanger={colorChanger}
        imageChanger={imageChanger}
        houseColorChanger={houseColorChanger}
        houseImageChanger={houseImageChanger}
        playAgain={playAgain}
        state2ref={state2}
        setStateCallback={setStateCallback}
        resultText={resultText}
        animation={animation}
        opacity={opacity}>
      </Playground>
    </div>
  );
}

export default App;
