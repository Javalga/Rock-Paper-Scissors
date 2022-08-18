import './App.css';
import {Header} from './components/Header/Header.js'
import { Rules } from './components/Rules/Rules.js'
import { Playground } from './components/Playground/Playground.js'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Rules></Rules>
      <Playground></Playground>
    </div>
  );
}

export default App;
