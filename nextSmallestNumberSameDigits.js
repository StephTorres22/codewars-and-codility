export function nextSmaller(num) {
  /* could take num, make an array create an array with values using the numbers in any order and return one below original number... */
  const arr = convertNumberToArray(num);

  const numbersArr = [];
  const combinations = permute(arr);
  /* Transform set to array */
  const combinationsArr = [...combinations];

  /* Loop over each combination transform each digit to a string so can concatenate together then transfer back to number to sort. */

  combinationsArr.forEach((combo) => {
    numbersArr.push(transformArrToSingleDigit(combo));
  });

  const sortedArr = numbersArr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === num) {
      if (!sortedArr[i - 1]) {
        return -1;
      }
      if (convertNumberToArray(sortedArr[i - 1]).length < arr.length) {
        return -1;
      }
      return sortedArr[i - 1];
    }
  }
};

export function permute(arr, start = 0, result = []) {
  if (start === arr.length - 1) {
    result.push([...arr]);
  }

  for (let i = start; i < arr.length; i++) {
    [arr[i], arr[start]] = [arr[start], arr[i]];
    permute(arr, start + 1, result);
    [arr[i], arr[start]] = [arr[start], arr[i]];
  }
  return result;
}

console.log(nextSmaller(213));

function transformArrToSingleDigit(arr) {
  let value = "";

  for (let i = 0; i < arr.length; i++) {
    value = value.concat(arr[i]);
  }

  return Number(value);
}

function convertNumberToArray(num) {
  const arr = String(num)
    .split("")
    .map((char) => Number(char));
  return arr;
}

/* THIS SOLUTION PASSES TESTS, BUT FAILS ON SPEED. DO WE NEED TO GET EVERY PERMUTATION, OR IS THERE ANOTHER WAY? */

/* maybe cycle backwards through the number. check if the last number is the smallest, if yes, switch, if not move on to the next
 i.e tens, if 100's is smaller switch and so on.. double check both initial number and final number are teh same length */

/* function messUpArr(arr) {
  const dup = [...arr];

  const result = [];


  for (let i = arr.length - 1; i <= 0; i--) {
    for (let j = arr.length - 2; j <= 0; j--) {
      if (arr[i] < arr[j]) {
        [...arr, arr[j], arr[i]] = [...arr, arr[i], arr[j]];
      }
    }
  }

  const firstNumber = dup.shift();
  //return [firstNumber, dup]

  if (dup.every((num) => num > firstNumber)) {
  }
} */
