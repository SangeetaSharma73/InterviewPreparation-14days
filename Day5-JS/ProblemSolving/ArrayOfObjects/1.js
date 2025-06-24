const products = [
  { id: 1, name: "Pen", price: 10, category: "Stationery" },
  { id: 2, name: "Notebook", price: 50, category: "Stationery" },
  { id: 3, name: "Shirt", price: 500, category: "Clothing" },
  { id: 4, name: "Jeans", price: 1000, category: "Clothing" },
  { id: 5, name: "Mug", price: 150, category: "Electronics" },
];

// 1.Find all products in the "Clothing" category.
let ans1 = products.filter((obj) => obj.category === "Clothing");
console.log(ans1);

// 2. Sort products by price in descending order.
let ans2 = products.sort((a, b) => b.price - a.price);
console.log(ans2);

//3.Return a list of product names with price less than 200.
// let ans3 = products.map((obj) => {
//   if (obj.price < 200) {
//     return { name: obj.name, price: obj.price };
//   }
// });

// console.log(ans3);

// 4. Check if any product belongs to category "Electronics".
let ans4 = products.some((obj) => obj.category === "Electronics");
console.log(ans4);

//5. Calculate the total price of all items in the "Stationery" category.
let ans5 = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(ans5);

//6. Group products by category into an object with dynamic keys.

let ans6 = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, []);
console.log(ans6);
