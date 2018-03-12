// @flow

import type {
  Anniversary,
  InterestingNumber,
  AnniversaryCalculator
} from "../types";
import addSeconds from "date-fns/add_seconds";
import addMinutes from "date-fns/add_minutes";
import addHours from "date-fns/add_hours";
import addDays from "date-fns/add_days";
import addWeeks from "date-fns/add_weeks";
import addMonths from "date-fns/add_months";
import addYears from "date-fns/add_years";

function makeCalculator(adder, units: string): AnniversaryCalculator {
  return (base, interestingNumber) => {
    const date = adder(base, interestingNumber.value);
    return { date, units, interestingNumber };
  };
}

export const seconds = makeCalculator(addSeconds, "seconds");
export const minutes = makeCalculator(addMinutes, "minutes");
export const hours = makeCalculator(addHours, "hours");
export const days = makeCalculator(addDays, "days");
export const weeks = makeCalculator(addWeeks, "weeks");
export const months = makeCalculator(addMonths, "months");
export const years = makeCalculator(addYears, "years");

const CALCULATORS: Array<AnniversaryCalculator> = [
  seconds,
  minutes,
  hours,
  days,
  weeks,
  months,
  years
];
export default CALCULATORS;

// from datetime import datetime, timedelta

// from anniversary import Anniversary

// # Each function represents some unit of time.
// # It takes a base_time and a Number,
// # creates a new time by adding number.value units to base_time,
// # and returns an Anniversary.

// # (The list of all calculators is declared at the bottom of this file.)

// def seconds(base_time, number):
//     time = base_time + timedelta(seconds=number.value)
//     return Anniversary(
//         base_time=base_time,
//         time=time,
//         units="seconds",
//         number=number,
//     )

// def minutes(base_time, number):
//     time = base_time + timedelta(minutes=number.value)
//     return Anniversary(
//         base_time=base_time,
//         time=time,
//         units="minutes",
//         number=number,
//     )

// def hours(base_time, number):
//     time = base_time + timedelta(hours=number.value)
//     return Anniversary(
//         base_time=base_time,
//         time=time,
//         units="hours",
//         number=number,
//     )

// def days(base_time, number):
//     time = base_time + timedelta(days=number.value)
//     return Anniversary(
//         base_time=base_time,
//         time=time,
//         units="days",
//         number=number,
//     )

// def weeks(base_time, number):
//     time = base_time + timedelta(weeks=number.value)
//     return Anniversary(
//         base_time=base_time,
//         time=time,
//         units="weeks",
//         number=number,
//     )

// def years(base_time, number):
//     # TODO: is this the right way to handle leap day?
//     year = base_time.year + number.value
//     try:
//         time = base_time.replace(year=year)
//     except ValueError as error:
//         if base_time.month == 2 and base_time.day == 29:
//             time = base_time.replace(
//                 month=2,
//                 day=28,
//                 year=year,
//             )
//         else:
//             raise error
//     return Anniversary(
//         base_time=base_time,
//         time=time,
//         units="years",
//         number=number,
//     )

// CALCULATORS = [
//     seconds,
//     minutes,
//     hours,
//     days,
//     weeks,
//     years,
// ]
