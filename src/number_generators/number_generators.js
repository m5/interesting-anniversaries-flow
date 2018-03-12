// @flow

import type { InterestingNumberGenerator } from "../types";

function* count(start: number = 0, step: number = 1) {
  let n = start;
  while (true) {
    yield n;
    n += step;
  }
}

export function* powersOfTen(): InterestingNumberGenerator {
  for (const exponent of count()) {
    yield {
      category: "powers_of_ten",
      value: Math.pow(10, exponent)
    };
  }
}

export function* powersOfTwo(): InterestingNumberGenerator {
  for (const exponent of count()) {
    yield {
      category: "powers_of_two",
      value: Math.pow(2, exponent)
    };
  }
}

export function* factorsOfTen(): InterestingNumberGenerator {
  for (const powerOfTen of powersOfTen()) {
    yield {
      category: "factors_of_ten",
      value: 2 * powerOfTen.value
    };
    yield {
      category: "factors_of_ten",
      value: 5 * powerOfTen.value
    };
  }
}

export function* repeatedDigits(): InterestingNumberGenerator {
  // https://oeis.org/A010785
  // Numbers with a single digit repeated.
  // 1, 2, 3, ... 11, 22, 33, 44, 55, 66, 77, 88, 99, ...
  // 111, 222, 333, ... 1111, 2222, 3333, ...
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Start at 3-digit numbers, since 11, 22, etc. aren't very interesting.
  for (const exponent of count(3)) {
    const powerOfTen = Math.pow(10, exponent);
    // https://oeis.org/A002275
    const allOnes = (powerOfTen - 1) / 9;
    for (const digit of digits) {
      const value = digit * allOnes;
      yield {
        category: "repeated_digits",
        value: value
      };
    }
  }
}

const GENERATORS: Array<() => InterestingNumberGenerator> = [
  powersOfTen,
  // powersOfTwo,
  factorsOfTen,
  repeatedDigits
];
export default GENERATORS;

// def counting_up():
//     # https://oeis.org/A057137
//     # 1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789,
//     # 1234567890, 12345678901, 123456789012, ...
//     # Start at 5 digits (12345)
//     for x in count(5):
//         power_of_ten = 10 ** x
//         # Magic from OEIS
//         value = floor((137174210 / 1111111111) * power_of_ten)
//         with_commas = "{:,}".format(value)
//         yield Number(
//             value=value,
//             display_value=with_commas,
//             formatted_value=with_commas,
//             category="ascending digits",
//         )
