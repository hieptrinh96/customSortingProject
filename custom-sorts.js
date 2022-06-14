function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === b % 2) return a - b
    else if (a % 2 === 0) return 1
    else if (a % 2 !== 0) return -1
  })
}

function validAnagrams(s, t) {

  let sLetter = s.toLowerCase().split('').sort();
  let tLetter = t.toLowerCase().split('').sort();
  if (sLetter.join('') === tLetter.join('')) return true;
  else return false;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (Math.floor(Math.log10(a)) === Math.floor(Math.log10(b))) return a - b
    else if (Math.floor(Math.log10(a)) > Math.floor(Math.log10(b))) return -1
    else return 1
  })
}

function frequencySort(arr) {
  let obj = {};
  for (let ele of arr) {
    if (obj[ele]) obj[ele] += 1;
    else obj[ele] = 1;
  }
  return arr.sort((a,b) => {
    if (obj[a] === obj[b]) return b - a;
    else if (obj[a] < obj[b]) return -1;
    else return 1;
  })
}

const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

console.log(frequencySort(arr1));        // => [3, 1, 1, 2, 2, 2]
console.log(frequencySort(arr2));        // => [1, 3, 3, 2, 2]
console.log(frequencySort(arr3));        // => [5, -1, 4, 4, -6, -6, 1, 1, 1]


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
