import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date", // date or amount
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const action = { type: "SORT_BY_DATE" };
  const currentState = {
    text: "",
    sortBy: "amount", // date or amount
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

//should set text filter
test("should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "Example"
  });
  expect(state.text).toBe("Example");
});

// should set start date filter
test("should set startDate filter", () => {
  const currentTime = moment().format();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    timestamp: currentTime
  });
  expect(state.startDate).toBe(currentTime);
});

// should set end date filter
test("should set endDate filter", () => {
  const currentTime = moment().format();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    timestamp: currentTime
  });
  expect(state.endDate).toBe(currentTime);
});
