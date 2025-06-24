// 4. **Capitalize the first letter of every word in a sentence**
//     - **Sample Input:** `"hello world"`
//     - **Expected Output:** `"Hello World"`

let str = "hello world";
let ans = "";
for (let word of str) {
  ascii = word.charCodeAt(0) + 65;
  let char = String.fromCharCode(ascii);
  ans += char;
}
console.log(ans);
