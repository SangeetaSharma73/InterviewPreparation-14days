const numbers = [3, 6, 9, 12, 15, 18];

// 1. Use filter to return numbers divisible by 3 but not by 6.
let ans1 = numbers.filter((val) => val % 3 == 0 && val % 6 != 0);
console.log(ans1); //[3,9,15]

// 2. Use map to convert numbers into objects like { value: 3, isEven: false }.
let ansObj = numbers.map((val) => {
  return { value: val, isEven: val % 2 === 0 };
});
console.log(ansObj);
// [
//   { value: 3, isEven: false },
//   { value: 6, isEven: true },
//   { value: 9, isEven: false },
//   { value: 12, isEven: true },
//   { value: 15, isEven: false },
//   { value: 18, isEven: true },
// ];

// 3. Use reduce to find the product of all numbers.
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); //524880

// 4.Chain filter, map, and reduce to double odd numbers and find their sum.
let hofAns = numbers
  .filter((val) => val % 2 === 1)
  .map((val) => val * 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(hofAns); //54

//5.Use every to check if all numbers are greater than 2.
let ans = numbers.every((val) => val > 2);
console.log(ans); //true
