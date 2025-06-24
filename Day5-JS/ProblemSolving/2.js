// 2. **Flatten a nested array (1 level deep)**
//     - **Sample Input:** `[1, [2, 3], 4, [5, 6]]`
//     - **Expected Output:** `[1, 2, 3, 4, 5, 6]`

// 🔍 Time Complexity:
// Let n be the total number of top-level elements (some are arrays, some are not).

// Suppose the total number of elements after flattening is m.

// The .flat() method iterates through each element once and unpacks inner arrays one level deep.

// Time Complexity: O(m)
// (where m is the total number of elements in the flattened array)

// 🧠 Space Complexity:
// A new array is created to store the result.
// Space Complexity: O(m)
let a = [1, [2, 3], 4, [5, 6]];
let ans = a.flat();
console.log(ans);
