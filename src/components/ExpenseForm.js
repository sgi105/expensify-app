import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  // state = {
  //   description: this.props.expense ? this.props.expense.description : "",
  //   note: this.props.expense ? this.props.expense.note : "",
  //   amount: this.props.expense
  //     ? (this.props.expense.amount / 100).toString()
  //     : "",
  //   createdAt: this.props.expense
  //     ? moment(this.props.expense.createdAt)
  //     : moment(),
  //   calendarFocused: false,
  //   error: ""
  // };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.amount || !this.state.description) {
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {console.log(this)}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            onChange={this.onAmountChange}
            value={this.state.amount}
            type="text"
            placeholder="Amount"
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            onChange={this.onNoteChange}
            value={this.state.note}
            placeholder="Add a note for your expense (optional)"
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
