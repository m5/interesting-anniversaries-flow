// @flow

import type { Birthday } from "../types";

type SetBirthday = { type: "SET_BIRTHDAY", birthday: Birthday };
type SetNumberCategories = {
  type: "SET_NUMBER_CATEGORIES",
  categories: Array<string>
};

type Action = SetBirthday;

export const setBirthday = (birthday: Birthday) => ({
  type: "SET_BIRTHDAY",
  birthday
});
