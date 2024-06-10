import Application from "./prop drilling example/App"
import ReactFunctionalcomponent from './1-functionalComponent';
import MyClasscomponent from './2-classComponent';
import ExampleUseState from './6-useState';
import ExampleUseEffect from "./7-useEffect";
import ExampleUseEffect2 from "./7-useEffect2";
import ExampleUseContext from "./useContext/8-useContext";
import UseContext2 from "./useContext2/UseContext2";
import UseReducerExample from "./useReducer/1-useReducer";
import UseReducerExample2 from "./useReducer/2-useReducer";
import UseReducerSimpleExample from "./useReducer2/useReducerExampleTwo";
import './style.css'

function App() {
  return (
    <div>
      {/* <ReactFunctionalcomponent/>
      <MyClasscomponent/>
      <Application/>
      <ExampleUseState/>
      <ExampleUseEffect/>
      <ExampleUseEffect2/>
      <ExampleUseContext/>
      <UseContext2/>
      <UseReducerExample/>
      <UseReducerExample2/> */}
      <UseReducerSimpleExample/>
    </div>
  )
}

export default App