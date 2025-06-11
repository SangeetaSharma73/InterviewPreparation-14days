from pathlib import Path

# Markdown content for Async/Await vs Promises
markdown_content = """# Day 6 - Async/Await vs Promises in JavaScript

## 🧠 Overview

Both **Promises** and **async/await** are used for handling asynchronous operations in JavaScript.  
They are based on the same underlying mechanism, but offer **different syntax and readability** advantages.

---

## 🔁 Promises Recap

A Promise represents an eventual result of an asynchronous operation. You use `.then()` to handle success, and `.catch()` for errors.

### 🧪 Example:
```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

🔂 Async/Await Syntax
async/await is syntactic sugar over Promises that allows you to write asynchronous code in a synchronous style.

🧪 Same example with async/await:




async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
🔍 Key Differences
Feature	Promises	Async/Await
Syntax Style	Chained with .then()	Linear, synchronous-like with await
Readability	Can become nested/chained	Easier to read and write
Error Handling	.catch()	try...catch block
Debugging	Harder to trace	Easier stack traces
Parallel Execution	Needs Promise.all()	Can still use Promise.all()
Use in Loops	Requires chaining or mapping	Natural with for...of + await

🧪 Error Handling Example
With Promises:




fetchUser()
  .then(user => fetchProfile(user.id))
  .then(profile => console.log(profile))
  .catch(err => console.error("Error:", err));
With Async/Await:




async function loadUserProfile() {
  try {
    const user = await fetchUser();
    const profile = await fetchProfile(user.id);
    console.log(profile);
  } catch (err) {
    console.error("Error:", err);
  }
}
🔁 Summary
Use Promises for simple or multiple concurrent operations.

Use async/await for cleaner, easier-to-read code — especially in complex sequences.

Both support .finally() for cleanup.

Under the hood, async functions return Promises.

"""

file_path = Path("C:/Users/user/OneDrive/Desktop/InterviewPreparation-14days/Day6-AdvanceJs/Implementation/async_vs_promises_readability_error_handling.md")

file_path.write_text(markdown_content, encoding="utf-8")


file_path.name