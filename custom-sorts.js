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
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
