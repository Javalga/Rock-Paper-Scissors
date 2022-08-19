import './App.css';
import { Header } from './components/Header/Header.js'
import { Rules } from './components/Rules/Rules.js'
import { Playground } from './components/Playground/Playground.js'
import { randomInt } from "mathjs";
import { useRef, useState, useEffect, useCallback } from 'react';
import iconPaper from './images/icon-paper.svg'
import iconRock from './images/icon-rock.svg'
import iconScissors from './images/icon-scissors.svg'

function App() {
  // useState
  const [housePicked, setHousePick] = useState(randomInt(1,4))
  const [score, setScore] = useState(0)
  const [result, setResult] = useState('win')
  const [playgroundState, setPlaygroundState] = useState(1)
  const [pickedOption, setPickedOption] = useState(0)
  const [opacity, setOpacity] = useState(false)

  

  const playAgain = () => {
    setPlaygroundState(playgroundState=> playgroundState = 1)
    setHousePick(randomInt(1,4))
  }
  const resultText = () => {
    if (result === 'tie') {
      return ('IT\'S A TIE')
    } else if (result === 'win') {
      return ('YOU WIN')
    } else if (result === 'lose') {
      return ('YOU LOSE')
    }
  }



  //useRef
  const state2 = useRef(null)
  const paper = useRef(null)
  const rock = useRef(null)
  const scissors = useRef(null)


  //PLAYER PICK HANDLER


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

  const setStateCallback = () => {
    setTimeout(() => {
      setPlaygroundState(3)
    }, 2000)
  }


  //logs

  useEffect(()=>{
    console.log(`Se ha asignado un nuevo valor a housePicked y es ${housePicked}`)
  })
  const ResultCalculator = 
    () => {
      if (pickedOption === 'paper' && housePicked === 1) {
        setResult('tie')
      } else if (pickedOption === 'paper' && housePicked === 2) {
        setResult('win')
        setScore(score => score + 1)
      } else if (pickedOption === 'paper' && housePicked === 3) {
        setResult('lose')
        setScore(score => score - 1)
      } else if (pickedOption === 'rock' && housePicked === 1) {
        setResult('lose')
        setScore(score => score - 1)
      } else if (pickedOption === 'rock' && housePicked === 2) {
        setResult('tie')
      } else if (pickedOption === 'rock' && housePicked === 3) {
        setResult('win')
        setScore(score => score + 1)
      } else if (pickedOption === 'scissors' && housePicked === 1) {
        setResult('win')
        setScore(score => score + 1)
      } else if (pickedOption === 'scissors' && housePicked === 2) {
        setResult('lose')
        setScore(score => score - 1)
      } else if (pickedOption === 'scissors' && housePicked === 3) {
        setResult('tie')
      }
    }
  




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
        opacity={opacity}
        setOpacity={setOpacity}
        playAgain={playAgain}
        state2ref={state2}
        setStateCallback={setStateCallback}
        resultText={resultText}
      ></Playground>
    </div>
  );
}

export default App;
