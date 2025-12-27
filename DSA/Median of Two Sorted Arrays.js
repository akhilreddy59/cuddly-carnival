console.log(("b" + "a" + +"a" + "a").toLowerCase());
// Output: "banana"
// Explanation:
// "b" + "a" = "ba"
// +"a" converts "a" to NaN, so "ba" + NaN = "baNaN"
// "baNaN" + "a" = "baNaNa"
// Finally, toLowerCase() converts "baNaNa" to "banana"

const x = [2, 2, 4, 4];
const y = [2, 2, 2, 4, 4];

// console.log("j".charCodeAt(0));
var add = function (x, y) {
  let a = [...x, ...y];
  let set = new Set(a);

  let sortedArray = Array.from(set).sort((a, b) => a - b);
  let mid = Math.floor(sortedArray.length / 2);
  console.log(sortedArray);
  if (sortedArray.length % 2 === 0) {
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  }

  return sortedArray[mid];
};

console.log(add(x, y));
