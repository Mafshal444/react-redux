import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Compont from './com';
function App() {
  const counter = useSelector((state) => {
    console.log(state)
    return state.counter
  });
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h1>other component</h1>
      <div>
        <Compont/>
      </div>
      <h1>app component</h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 'new data' })}>Increase</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
}

export default App;
