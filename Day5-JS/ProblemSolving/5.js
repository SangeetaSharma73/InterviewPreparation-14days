// 5. **Return common elements from two arrays**
//     - **Sample Input:** `[1, 2, 3, 4]` and `[3, 4, 5, 6]`
//     - **Expected Output:** `[3, 4]`

let a1 = [1, 2, 3, 4];
let a2 = [3, 4, 5, 6];
let common = [];
//this code correct for unique element in each array not for duplicate
for (let val1 of a1) {
  for (let val2 of a2) {
    if (val1 == val2) {
      common.push(val1);
    }
  }
}
console.log(common);

let a3 = [1, 2, 3, 4];
let a4 = [3, 4, 5, 6];
//this is correct for duplicate and non-duplicate
a3.sort((c, d) => c - d);
a4.sort((c, d) => c - d);

let i = 0;
let j = 0;
ans = [];
while (i < a3.length && j < a4.length) {
  if (a3[i] == a4[j]) {
    ans.push(a3[i]);
    i++;
    j++;
  } else if (a3[i] < a4[j]) {
    i++;
  } else {
    j++;
  }
}
console.log(ans);
