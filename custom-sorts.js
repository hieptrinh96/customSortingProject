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
  // Your code here
}

// let s = "anagram";
// let t = "nagaram";

// console.log(validAnagrams(s, t));

// console.log(Math.log10(10))
// console.log(Math.log10(99))
// console.log(Math.log10(100))


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
