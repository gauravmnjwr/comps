import produce from 'immer'
import Button from "../components/Button";
// import useCounter from "../hooks/use-counter";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "set-value-to-add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add-value-to-count"

function CounterPage({ initialCount }) {
  // const { count, increment } = useCounter(initialCount); //!imp

  // using useState
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd,setValueToAdd] = useState(0);

  const reducer = (state, action) => {
    // using switch statements

    switch (action.type) {
      case INCREMENT_COUNT:
        // using immer

        state.count=state.count+1;
        return
        // return {
        //   ...state,
        //   count: state.count + 1,
        // };
      case DECREMENT_COUNT:
        // using immer

        state.count=state.count-1;
        return;
        // return {
        //   ...state,
        //   count: state.count - 1,
        // };
      case SET_VALUE_TO_ADD:
        // using immer

        state.valueToAdd=action.payload
        return
        // return {
        //   ...state,
        //   valueToAdd: action.payload,
        // };
      case ADD_VALUE_TO_COUNT:
        // using immer
        state.count=state.count+state.valueToAdd;
        state.valueToAdd=0;
        return;
        // return {
        //   ...state,
        //   count:state.count+state.valueToAdd,
        //   valueToAdd:0
        // }

      default:
        // using immer

        return;
    }
  };
  // useReducer STATE
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  };
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor=""> Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-grey50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
