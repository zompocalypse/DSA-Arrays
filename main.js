function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);

  console.log(arr.get(0));
}

// main();

// 5. URLify a string
function urlify(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      string = string.slice(0, i) + '%20' + string.slice(i + 1, string.length);
    }
  }
  return string;
}

const url = 'www.thinkful.com /tauh ida parv een';
// console.log(urlify(url));

// 6. Filtering an array
function filter(array, limit) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < limit) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
const array = [4, 6, -3, 5, -2, 1];
// console.log(filter(array, 5));

// 7. Max sum in the array
function maxSum(array) {
  let greatestSum = 0;
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    currentSum = currentSum + array[i];
    if (currentSum > greatestSum) {
      greatestSum = currentSum;
    }
  }
  return greatestSum;
}

const numbersToSumUp = [4, 6, -3, 5, -2, 1];
// console.log(maxSum(numbersToSumUp));

// 8. Merge arrays

function mergeArrays(a, b) {
  let newArray = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    const valueA = a[i];
    const valueB = b[j];
    if (valueA <= valueB) {
      newArray.push(valueA);
      i++;
    } else {
      newArray.push(valueB);
      j++;
    }
  }
  if (j < b.length) {
    i = j;
    a = b;
  }
  while (i < a.length) {
    newArray.push(a[i]);
    i++;
  }
  return newArray;
}

const arr1 = [2, 3];
const arr2 = [1, 3, 4, 7];
const arr3 = [2, 5, 9];
const arr4 = [1, 3, 4, 17];
const arr5 = [1, 2, 3, 7];
const arr6 = [4, 5, 6];

// console.log(mergeArrays(arr1, arr2));
// console.log(mergeArrays(arr3, arr4));
// console.log(mergeArrays(arr5, arr6));

// 9. Remove characters

function removeCharacters(string, removeThese) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let removeFlag = false;
    for (let j = 0; j < removeThese.length; j++) {
      if (string[i] === removeThese[j]) {
        removeFlag = true;
        break;
      }
    }
    if (!removeFlag) {
      newString += string[i];
    }
  }
  return newString;
}

const givenString = 'Battle of the Vowels: Hawaii vs. Grozny';
const remove = 'aeiou';

// console.log(removeCharacters(givenString, remove));

// 10. Products
function productsMinusIndex(array) {
  const productsMultiplied = [];
  for (let i = 0; i < array.length; i++) {
    const newArray = array.filter((item) => item !== array[i]);
    let product = 1;
    for (let j = 0; j < newArray.length; j++) {
      product *= newArray[j];
    }
    productsMultiplied.push(product);
  }
  return productsMultiplied;
}

const thisArray = [1, 3, 9, 3];
// console.log(productsMinusIndex(thisArray));

// 11. 2D array

function twoDArray(matrix) {
  //   let ans = JSON.parse(JSON.stringify(matrix));
  //   let rows = [];
  //   let cols = [];
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let k = 0; k < matrix[i].length; k++) {
  //       if (!matrix[i][k]) rows[i] = i;
  //       if (!matrix[k][i]) cols[i] = i;
  //     }
  //     if (rows[i] === i) ans[i] = new Array(ans[i].length).fill(0);
  //     if (cols[i] === i)
  //       ans = ans.map((arr) => {
  //         arr[i] = 0;
  //         return arr;
  //       });
  //   }
  //   return ans;
  let verts = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        verts.push(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(0)) {
      matrix[i].fill(0);
      continue;
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if (verts.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

const theArray = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(twoDArray(theArray));

// 12. String rotation

function stringRotation(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }

  return (str1 + str1).includes(str2);
}

const word1 = 'amazon';
const word2 = 'azonma';
const word3 = 'azonam';

// console.log(stringRotation(word1, word2));
// console.log(stringRotation(word1, word3));
