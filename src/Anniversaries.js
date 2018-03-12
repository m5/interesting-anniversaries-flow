// @flow
import React from "react";
import addYears from "date-fns/add_years";
import generate, { makeKey } from "./anniversary_generator";
import format from "date-fns/format";
import commaNumber from "comma-number";

type Props = {
  birthday: Date
};

const Anniversaries = ({ birthday }: Props) => {
  const now = Date.now();
  const minDate = addYears(now, 0);
  const maxDate = addYears(birthday, 150);
  const anniversaries = generate(birthday, minDate, maxDate);
  return (
    <ul style={{ lineHeight: "1.5em" }}>
      {anniversaries.map(anniversary => (
        <li key={makeKey(anniversary)}>
          On {format(anniversary.date, "MMMM D, YYYY")} you will be{" "}
          {commaNumber(anniversary.interestingNumber.value)} {anniversary.units}{" "}
          old!
        </li>
      ))}
    </ul>
  );
};
export default Anniversaries;
