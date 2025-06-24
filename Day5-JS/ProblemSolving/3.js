// 3. **Find the longest word in a given sentence**
//     - **Sample Input:** `"The quick brown fox jumps"`
//     - **Expected Output:** `"jumps"`

//tc=O(n)
//sc = O(n)
let str = "The quick brown fox jumps";
let arr = str.split(" ");
// console.log(arr);
let ans = "";
let maxVal = 0;
for (let val of arr) {
  if (val.length >= maxVal) {
    maxVal = val.length;
    ans = val;
  }
}
console.log(ans);
