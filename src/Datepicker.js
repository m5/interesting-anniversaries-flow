// @flow
import React from "react";
import withReducer from "recompose";

const Datepicker = ({ date, dispatch }) => {
  return <div />;
};

// export const Datepicker;

// type State = {
//   years: number[],
//   months: ?(number[]),
//   days: ?(number[]),
//   year: ?number,
//   month: ?number,
//   day: ?number,
//   date: ?Date
// };

// const years = [];
// const currentYear = new Date().getFullYear();
// for (let i = currentYear; i > currentYear - 150; i--) {
//   years.push(i);
// }

// const months = [];

// const SET_YEAR = "SET_YEAR";
// const SET_MONTH = "SET_MONTH";
// const SET_DAY = "SET_DAY";

// const reducer = (state: State, action) => {
//   switch (action.type) {
//     case SET_YEAR:
//       return count + 1;
//     case SET_MONTH:
//       return count - 1;
//     case SET_MONTH:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// export default withReducer("date", "dispatch", reducer, { years: years })(
//   Datepicker
// );
