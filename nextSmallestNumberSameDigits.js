export function nextSmaller(num) {
  /* could take num, make an array create an array with values using the numbers in any order and return one below original number... */
  const arr = convertNumberToArray(num);
  const stringNum = transformArrToSingleDigit(arr);

  const numbersArr = [];
  const combinations = permute(arr);

  /* Loop over each combination transform each digit to a string so can concatenate together then transfer back to number to sort. */

  /* combinationsArr.forEach((combo) => {
    numbersArr.push(transformArrToSingleDigit(combo));
  });
  forEach is slower than for loop*/

  for (let i = 0; i < combinations.length; i++) {
    numbersArr.push(collapseArrayToNumber([i]));
  }

  const sortedArr = numbersArr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === stringNum) {
      if (!sortedArr[i - 1]) {
        return -1;
      }
      if (sortedArr[i - 1][0] === "0") {
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

export function collapseArrayToNumber(array){
  let value = '';

  for (let i=0; i<array.length; i++){
    value += array[i];
  }
  return Number(value);
}

function transformArrToSingleDigit(arr) {
  let value = "";

  for (let i = 0; i < arr.length; i++) {
    value = value.concat(arr[i]);
  }

  return value;
}

export function convertNumberToArray(num) {
  const arr = String(num).split("").map((char) => Number(char))
  return arr;
}

/* THIS SOLUTION PASSES TESTS, BUT FAILS ON SPEED. DO WE NEED TO GET EVERY PERMUTATION, OR IS THERE ANOTHER WAY? */

/* maybe cycle backwards through the number. check if the last number is the smallest, if yes, switch, if not move on to the next
 i.e tens, if 100's is smaller switch and so on.. double check both initial number and final number are teh same length */

/* function tryignAgain(num) {
  const arr = convertNumberToArray(num);
  const dup = [...arr];
  const firstNumber = dup.shift();
  //return dup;

  /* start at right
  for(let i = dup.length-1; i>= 0 ; i--){
    for(let j= dup.length-1; j>=0; j--){
        if()


  for (let i = arr.length - 1; i <= 0; i--) {
    for (let j = arr.length - 2; j <= 0; j--) {
      if (arr[i] < arr[j]) {
        [...arr, arr[j], arr[i]] = [...arr, arr[i], arr[j]];
      }
    }
  }


  //return [firstNumber, dup]

  if (dup.every((num) => num > firstNumber)) {
  }
}

console.log(tryignAgain(231)); */

/* DIFFERENT WAY, HAD TO WATCH A VIDEO FOR SOLUTION,
-FIND DIGIT WHERE THE FOLLWOING DIGIT IS LOWER,
-REMOVE DIGIT, BUMPS LOWER DIGIT TO IT'S POSTION,
-CONCAT FOLLOWING DIGITS IN DESCENDING ORDER,
-CONCAT SPLIT DIGIT TO END */

function getSplitDigitIndex(stringNum) {
  /* we are starting from the right,
    start at second in from right because last digit/value has nothing after it to compare */
  for (let i = stringNum.length - 2; i >= 0; i--) {
    if (stringNum[i + 1] < stringNum[i]) {
      return i;
    }
  }
  return -1;
}

function getSmaller(num) {
  const stringNum = String(num);

  const splitIndex = getSplitDigitIndex(stringNum);

  const lastDigit = stringNum.slice(splitIndex, splitIndex + 1);
  const front = stringNum.substring(0, splitIndex);
  const end = stringNum.substring(splitIndex + 1);
  const sortedEnd = transformArrToSingleDigit(
    end.split("").sort((a, b) => b - a)
  );

  let result;

  result = front + sortedEnd + lastDigit;

  if (sortedEnd[sortedEnd.length - 1] === "0") {
    result = front + sortedEnd.slice(0, -1) + lastDigit + "0";
  }

  if (result > stringNum) {
    return -1;
  }

  if (result[0] === 0) {
    return -1;
  }

  return Number(result);
}
