// @flow

import generators from "./number_generators/number_generators";
import calculators from "./anniversary_calculators/anniversary_calculators";
import type {
  Anniversary,
  InterestingNumberGenerator,
  AnniversaryCalculator
} from "./types";

type Pair = [any, AnniversaryCalculator];

const pairs: Pair[] = [];
for (const generator of generators) {
  for (const calculator of calculators) {
    pairs.push([generator, calculator]);
  }
}

const generate = (base: Date, minDate: Date, maxDate: Date): Anniversary[] => {
  const anniversaries: Anniversary[] = [];
  pairs.forEach(([generator, calculator]) => {
    for (const interestingNumber of generator()) {
      const anniversary = calculator(base, interestingNumber);
      if (anniversary.date > maxDate) {
        break;
      }
      if (anniversary.date > minDate) {
        anniversaries.push(anniversary);
      }
      if (anniversaries.length > 1000) {
        break;
      }
    }
  });
  return anniversaries.sort((a, b) => a.date - b.date);
};

export default generate;

export const makeKey = (anniversary: Anniversary) =>
  `
  ${anniversary.interestingNumber.value}
  ${anniversary.units}
  ${anniversary.interestingNumber.category}
  `;

// # Takes a base_time and generates an unsorted sequence of anniversaries from
// # that base_time. All anniversaries < max_time will be generated.
// def anniversaries(base_time, max_time):
//     for generator, calculator in product(GENERATORS, CALCULATORS):
//         for number in generator():
//             try:
//                 anniversary = calculator(base_time, number)
//             except ValueError:
//                 # When the time gets out of range for the Time class.
//                 break
//             if anniversary.time > max_time:
//                 break
//             yield anniversary
