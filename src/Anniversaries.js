// @flow
import React from "react";

type Props = {
  dateString: string
};

const Anniversaries = ({ match }: any) => <div>{match.params.dateString}</div>;
export default Anniversaries;
