import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense object", () => {
  const action = removeExpense({ id: "1234" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "1234"
  });
});

test("should setup edit expense object", () => {
  const action = editExpense("1234", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "1234",
    updates: {
      note: "New note value"
    }
  });
});

test("should setup add expense object with provided value", () => {
  const expenseData = {
    description: "Rent",
    amount: 1000,
    createdAt: 1000,
    note: "this was last month rent"
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "Rent",
      amount: 1000,
      createdAt: 1000,
      note: "this was last month rent",
      id: expect.any(String)
    }
  });
});

test("should setup add expense object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
