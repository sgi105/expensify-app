import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../actions/filters";
import moment from "moment";
test("should generate and set start date object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    timestamp: moment(0)
  });
});

test("should generate and set end date object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    timestamp: moment(0)
  });
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should generate and set set text filter object with text value", () => {
  const text = "Sample text";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: text
  });
});

test("should generate and set set text filter object with default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
