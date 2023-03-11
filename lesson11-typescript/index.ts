const convertNumberToArray = (num: number): number[] => {
  let number: number = num;
  const numArray: number[] = [];

  while (number > 1) {
    let remainder: number = number % 10;
    number = Math.trunc(number / 10);
    numArray.push(remainder);
  }

  return numArray.reverse();
};

const getOddNumArray = (numArray: number[]): number[][] => {
  const oddNumArray: number[][] = [];

  numArray.forEach((el, i) => {
    if (i < numArray.length - 2) {
      if (
        el % 2 !== 0 &&
        numArray[i + 1] % 2 !== 0 &&
        numArray[i + 2] % 2 === 0
      ) {
        oddNumArray.push([el, numArray[i + 1]]);
      }
    } else if (i < numArray.length - 1) {
      if (el % 2 !== 0 && numArray[i + 1] % 2 !== 0) {
        oddNumArray.push([el, numArray[i + 1]]);
      }
    }
  });

  return oddNumArray;
};

const compareNumbers = (a: number, b: number): boolean => {
  return a < b ? true : false;
};

const areNumbersAscend = (oddNumArrays: number[][]): boolean => {
  for (let i = 0; i < oddNumArrays.length; i++) {
    const [a, b] = [...oddNumArrays[i]];

    if (!compareNumbers(a, b)) {
      return false;
    }
  }

  return true;
};

const isEvenMoreThanOdd = (numArray: number[]): boolean => {
  let oddSum: number = 0;
  let evenSum: number = 0;

  numArray.forEach((el) => {
    el % 2 === 0 ? (evenSum += el) : (oddSum += el);
  });

  return evenSum > oddSum ? true : false;
};

const checkPromocode = (promocode: number): number => {
  const TYPE_CONDITION: string = "number";
  const LENGTH_CONDITION: number = 8;

  const numArray: number[] = convertNumberToArray(promocode);

  if (
    typeof promocode !== TYPE_CONDITION ||
    numArray.length !== LENGTH_CONDITION
  ) {
    return 0;
  }

  const oddNumArrays: number[][] = getOddNumArray(numArray);

  if (oddNumArrays.length === 2) {
    return areNumbersAscend(oddNumArrays) ? 2000 : 1000;
  } else {
    return isEvenMoreThanOdd(numArray) ? 100 : 0;
  }
};

const promocode: number = checkPromocode(37288839);
console.log(promocode);
