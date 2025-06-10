// 1. **Check if two strings are anagrams of each other**
//     - **Sample Input:** `"listen"` and `"silent"`
//     - **Expected Output:** `true`

let s = "listen";
let t = "silent";

a = s.split("");
b = t.split("");
c = a.sort().join("");
d = b.sort().join("");

console.log(c === d);
