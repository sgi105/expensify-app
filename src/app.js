import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 3000 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 100 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));
// store.dispatch(setTextFilter("bill"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
