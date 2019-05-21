import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default staet", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test("should add an expense", () => {
  const newExpense = {
    id: "4",
    description: "Cake",
    note: "",
    amount: 1000,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

// should edit an expense
test("should edit an expense", () => {
  const updates = {
    id: "1",
    description: "Gums",
    note: "",
    amount: 1950,
    createdAt: 0
  };
  const action = {
    type: "EDIT_EXPENSE",
    updates,
    id: "1"
  };

  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(updates);
});

// should not edit expense if expense not found
test("should not edit an expense when there is no expense with given id", () => {
  const updates = {
    id: "1",
    description: "Gums",
    note: "",
    amount: 1950,
    createdAt: 0
  };
  const action = {
    type: "EDIT_EXPENSE",
    updates,
    id: "15"
  };

  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(expenses[0]);
});
