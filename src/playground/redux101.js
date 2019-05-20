import { createStore } from "redux";

// Action generators -

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy
  };
};

const resetCount = () => {
  return {
    type: "RESET"
  };
};

const setCount = ({ count }) => {
  return {
    type: "SET",
    count
  };
};

// Reducers

const countRuducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "RESET":
      return {
        count: 0
      };

    case "SET":
      return {
        count: action.count
      };

    default:
      return state;
  }
};

const store = createStore(countRuducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));
