import { useSelector } from "react-redux";
function Com() {
  const counter = useSelector((state) => {
    console.log(state)
    return state.counter
  });
  return (
    <div>
        <h3>Counter</h3>
        <h3>{counter}</h3>
    </div>
  );
}

export default Com;
