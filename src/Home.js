// @flow
import React from "react";

import { withState } from "recompose";
import Anniversaries from "./Anniversaries";

const Home = ({ birthdayString, setBirthday }) => {
  let birthday = undefined;
  if (birthdayString) {
    const [year, month, day] = birthdayString.split("-").map(s => parseInt(s));
    if (year >= 1000) {
      birthday = new Date(year, month - 1, day);
    }
  }
  const anniversaries =
    birthday === undefined ? null : <Anniversaries birthday={birthday} />;
  return (
    <div>
      <h2>What is your birthday?</h2>
      <p>
        <input
          type="date"
          onChange={e => setBirthday(e.target.value)}
          style={{ fontSize: "1em" }}
        />
      </p>
      {anniversaries}
    </div>
  );
};

export default withState("birthdayString", "setBirthday")(Home);
