let n = 7; // You can change this size
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (
      i === Math.floor(n / 2) ||
      j === Math.floor(n / 2) ||
      i === j ||
      i + j === n - 1
    ) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);
