let counter = 0;

function persistence(num) {
  const numArray = Array.from(`${num}`);
  const intNumArry = numArray.map((element) => parseInt(element));

  if (intNumArry.length == 1) {
    return counter;
  } else if (intNumArry.length !== 1) {
    let num = 1;
    counter++;
    intNumArry.forEach((element) => {
      num *= element;
    });
    //  console.log(num, counter)
    return persistence(num);
  }
}

//console.log(persistence(1342594))

/* function present(a, x){

   return a.includes(x) ? true : false // more concise than an if statement
}

console.log(present([66, 51, 200, 'a', 'c'], 66)) */

function getHigestPossible(a, b, c) {
  const combinations = [
    a + b + c,
    (a + b) * c,
    a + b * c,
    a * b + c,
    a * b * c,
    a * (b * c),
    a * (b + c),
  ];

  const largerst = Math.max(...combinations);

  return largerst;
}

//console.log(getHigestPossible(9,1,1))

function complementaryDNA(dna) {
  const dnaArray = Array.from(dna); //turns string into array with each element an individual letter

  const complementary = [];

  dnaArray.forEach((value) => {
    value == "A"
      ? complementary.push("T")
      : value == "T"
      ? complementary.push("A")
      : value == "G"
      ? complementary.push("C")
      : complementary.push("G");
  });

  return complementary.join().replaceAll(",", ""); //replaceAll doesn't work on codewars, had to us replace(/,/g, ''),
  //the g means replace continues through the string rather than stopping at the first case.
}
/* 
console.log(complementaryDNA('ATTG')) */

function categoriseNewMember(data) {
  const output = [];

  //data is an array of array [[12, 2], [20, 8], etc]/ list of pairs
  // first int is age, senior must be >= 55 and second int is hanicap, senoir must have handicap > 7. else assign 'Open'

  for (i in data) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      output.push("Senior");
    } else output.push("Open");
  }

  /* console.log(output); */
}

categoriseNewMember([
  [12, 2],
  [56, 8],
  [59, 1],
]);

function peopleOnTheBus(busStops) {
  //takes a list of pairs/ array of arrays
  //first number is how many get on, second is how many get off.
  //want final number >= 0.
  let total = 0;
  busStops.forEach((pair) => (total += pair[0] - pair[1]));

  /*  console.log(total)
   */
  //works with reduce too!
  //busStops.reduce((total, number) => total + number[0] - number[1], 0)
  // or busStops.reduce((remainder, [on, off] => remainder + on - off), 0)
}

peopleOnTheBus([
  [10, 0],
  [3, 5],
  [5, 8],
]);

function willYouMakeIt(distanceToPump, mpg, fuelLeft) {
  if (distanceToPump > mpg * fuelLeft) {
    return false;
  } else return true;
}

//console.log(willYouMakeIt(50, 25, 2))

function removeVowels(str) {
  return str.replace(/[aeiou]/g, "");
}

//console.log(removeVowels('Does this work or have i got it wrong'))

function removeSmallest(numbers) {
  if (numbers.length == 1) {
    return [];
  }

  const smallest = Math.min(...numbers);

  numbers.splice(numbers.indexOf(smallest), 1);

  return numbers;

  /* this mutates the list and thats a no for the codewar */

  //.filter returns a new array.

  /* return withoutSmallest = numbers.filter((number) =>{
    return number !== smallest
  });

  THIS DOESN'T MUTATE THE ARRAY, BUT REMOVES ALL ELEMENTS THAT ARE THE SAME A SMALLEST.

  defining a new array using the the original array and not mutataing it..
  const = [...duplicate] = numbers; USES THE SPREAD OPERATOR, CALLS NEW ARRAY DUPLICATE, THIS IS SLIGHTLY FUNNY SYNTAX TO ME. 
 */
}
function solution(A) {
  /* FINDING SMALLEST POSSIBLE NUMBER NOT PART OR AN ARRAY. MUST BE POSITIVE*/
  // Implement your solution here

  /* NEED TO READ ALL NUMBERS, CHECK FOR GAPS, FINE SMALLEST NUMBER THAT COULD PLUG GAP.
    
    FOREACH LOOP,
    FOR EACH ELEMENT, CHECK IF A INCLUDES ELEMENT +1 IF NOT RETURN ELEMENT PLUS 1 */

  if (!A.includes(1)) {
    return 1;
  }

  const belowZero = (number) => number > 0;

  if (A.every(belowZero)) {
    return 1;
  }

  const filtered = A.filter((elemnt) => elemnt > 0);

  let notIncluded = [];

  /* populates aPlusOne with positive values of A plus 1 */
  const aPlusOne = filtered.map((element) => element + 1);

  aPlusOne.forEach((element) => {
    if (!A.includes(element)) {
      notIncluded.push(element);
    }
  });

  return Math.min(...aPlusOne);
}

/* FIND FIRST UNIQUE NUMBER IN A GIVEN ARRAY */

function lowestUnique(array) {
  /* WORKS FOR PAIRS NOT NOTHING ELSE! */
  /* DOSN@T WORK AS INTENDED */
  const [...duplicate] = array;
  const indexes = [];

  duplicate.sort((a, b) => {
    return a - b;
  });

  duplicate.forEach((element, index) => {
    if (element == duplicate[index + 1]) {
      duplicate.splice(index, 2);
    }
  });

  duplicate.forEach((element) => {
    indexes.push(array.indexOf(element));
  });

  if (duplicate.length == 2 && duplicate[0] == duplicate[1]) {
    return -1;
  } else {
    return array[Math.min(...indexes)];
  }

  /* RETURNS THE FIRST OCCURENECE OF A UNIQUE NUMBER IF ALL OTHER NUMBERS ARE PAIRS
    ALSO VERY SLOW! SORTING FIRST THEN SPLICING AND PUSHING ETC */ //does'nt not this.
}

/* OBJECTS HAVE KEY VALUE PAIRS, I WANT THE KEY TO BE EACH ELEMENT IN THE ARRAY, AND THE VALUE TO BE THE NUMBER OF TIMES IT OCCURS */

function findOccurances(array) {
  const counter = {};
  const occurances = [];

  /* PUTS IN ORDER... */
  array.map((value) => {
    counter[value] = counter[value] + 1 || 1;
    /* Don;t quit get this. */
  });

  array.forEach((element) => {
    occurances.push(counter[element]);
  });

  if (!array[occurances.indexOf(1)]) {
    return -1;
  } else return array[occurances.indexOf(1)];
}

console.log(findOccurances(['o', 'o', 'g', 'n', 'o', 'g']))

function binaryGap(N) {
  /*  const lengths = [];
  const arr = n.toString(2).split(1); // this is an accurate quite and very easy way to convert ints to binary! . split removes all the 1s and puts each chunk of zeros into an array.

  arr.forEach((element) => {
    lengths.push(element.length);
  });
  console.log(n.toString(2));
  console.log(arr);
  console.log(
    lengths.sort((a, b) => {
      return a - b;
    })
  );

  if (arr[arr.length - 1] !== "") {
    return 0;
  } else {
    return Math.max(...lengths);
  } */

  /* THIS ACHIEVES ABOUT 60% CORRECTNESS, 
  GETS CAUGHT OUT BY TRAILING 0S, NEED TO THINK ABOUT EDGE CASES MORE */
  const binary = N.toString(2);
  const binArray = binary.split("");
  const arr = binary.split(1);
  const lengths = [];

  arr.forEach((element) => {
    lengths.push(element.length);
  });

  if (binArray.includes("0") == false) {
    return 0;
  }

  if (binArray[0] == "1") {
    binArray.splice(0, 1);
    const allZero = (currentElement) => currentElement == 0;
    if (binArray.every(allZero)) {
      return 0;
    } else if (
      arr[arr.length - 1].length >= 0 &&
      arr[arr.length - 1].length !== Math.max(...lengths)
    ) {
      return Math.max(...lengths);
    } else {
      lengths.sort((a, b) => {
        return a - b;
      });
      return lengths[lengths.length - 2];
    }
  }
}

function findTheOddOneOut(arr) {
  const map = new Map();

  arr.forEach((element) => {
    if (map.has(element)) {
      let count = map.get(element);
      map.set(element, count + 1);
    } else {
      map.set(element, 1);
    }
  });

  /* CREATING A MAP TO COUNT OCCURENCES OF ELEMENTS IN AN ARRAY INSTEAD OF OBJECTS */

  for (const [key, value] of map) {
    if (value == 1) {
      return key;
    }
  }

  /* LOOP THROUGH MAP AND IF VALUE OF A KEY IS 1, IT ONLY APPEARS ONCE IN GIVEN ARRAY, RETURN KEY */
}

/* MOVING/ROTATING ARRAYS */

function rotateArray(arr, times) {
  /* .pop() removes last element 
     .unshift added elements to the beginning of an array */

  for (let i = 0; i < times; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  return arr;
}

/* Take 2 strings s1 and s2 including only letters from a to z. 
  Return a new sorted string, the longest possible, 
  containing distinct letters - each taken only once - coming from s1 or s2. */

function longestString(s1, s2) {
  /* sort strings, 
     find and remove duplicates
     compare lengths,
     return longest */

  function getOrderedStringNoDuplicates(string) {
    const [...array] = string;
    array.sort();
    const set = new Set(array);
    return Array.from(set).join("");

    /* this can be written like so;
    
    [... new Set(string)].sort().join('')
    
    
    much cleaner and succinct*/
  }
  console.log(getOrderedStringNoDuplicates(s1).length);
  console.log(getOrderedStringNoDuplicates(s1));
  console.log(getOrderedStringNoDuplicates(s2).length);
  console.log(getOrderedStringNoDuplicates(s2));
  if (
    getOrderedStringNoDuplicates(s1).length >
    getOrderedStringNoDuplicates(s2).length
  ) {
    return getOrderedStringNoDuplicates(s1);
  } else return getOrderedStringNoDuplicates(s2);
}

/* didn't read the description properly */
function smallestInt(filtered) {
  filtered.sort();

  const differences = filtered.map(
    (element, index) => filtered[index + 1] - element
  );

  differences.forEach((element, index) => {
    if (element > 1) {
      return filtered[index] + 1;
    }
  });
  filtered.forEach((element, index) => {
    let sum = filtered[index + 1] - element;
    console.log(sum);
    if (sum > 1) {
      console.log(element);
      return filtered[index] + 1;
    } else if (sum == NaN) {
      return filtered[filtered.length - 1] + 1;
    }
  });
}

//console.log(smallestInt([1, 3, 6, 4, 1, 2]));


