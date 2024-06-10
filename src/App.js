import Application from "./prop drilling example/App"
import ReactFunctionalcomponent from './1-functionalComponent';
import MyClasscomponent from './2-classComponent';
import ExampleUseState from './6-useState';
import ExampleUseEffect from "./7-useEffect";
import ExampleUseEffect2 from "./7-useEffect2";
import ExampleUseContext from "./useContext/8-useContext";
import UseContext2 from "./useContext2/UseContext2";
import './style.css'

function App() {
  return (
    <div>
      <ReactFunctionalcomponent/>
      <MyClasscomponent/>
      <Application/>
      <ExampleUseState/>
      <ExampleUseEffect/>
      <ExampleUseEffect2/>
      <ExampleUseContext/>
      <UseContext2/>
    </div>
  )
}

export default App