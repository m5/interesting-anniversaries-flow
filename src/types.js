// @flow

export type Birthday = {
  year: number,
  month: number,
  day: number
};

export type InterestingNumber = {
  category: string,
  value: number
};

export type Anniversary = {
  date: Date,
  units: string,
  interestingNumber: InterestingNumber
};

export type InterestingNumberGenerator = Iterator<InterestingNumber>;

export type AnniversaryCalculator = (
  base: Date,
  InterestingNumber: InterestingNumber
) => Anniversary;
