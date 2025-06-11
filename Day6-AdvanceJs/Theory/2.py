from pathlib import Path

# Markdown content explaining polyfills for Array methods
markdown_content = """# Day 6 – Polyfilling Missing Array Methods in JavaScript

## 🧩 What is a Polyfill?

A **polyfill** is a piece of code (usually JavaScript) that implements a feature **on browsers that do not support it natively**.

> It checks if a feature exists (feature detection) and adds a fallback implementation if not.

---

## ✅ Feature Detection

You should always **check if the feature exists** before defining it. This prevents overriding existing native implementations.

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(valueToFind, fromIndex) {
    // fallback implementation here
  };
}
🛠 Polyfill Example: Array.prototype.includes()
Native Support:
js
Always show details

Copy
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true
Polyfill for Older Browsers:
js
Always show details

Copy
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    const o = Object(this);
    const len = o.length >>> 0;

    if (len === 0) return false;

    const n = fromIndex | 0;
    let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
      if (o[k] === searchElement || (typeof o[k] === 'number' && typeof searchElement === 'number' && isNaN(o[k]) && isNaN(searchElement))) {
        return true;
      }
      k++;
    }

    return false;
  };
}
📜 Other Polyfill Examples
Array.prototype.find()
js
Always show details

Copy
if (!Array.prototype.find) {
  Array.prototype.find = function(callback, thisArg) {
    if (this == null) throw new TypeError('"this" is null or not defined');
    const o = Object(this);
    const len = o.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (callback.call(thisArg, o[i], i, o)) {
        return o[i];
      }
    }
    return undefined;
  };
}
Array.prototype.flat()
js
Always show details

Copy
if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth = 1) {
    const flatten = (arr, d) =>
      d > 0
        ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, d - 1) : val), [])
        : arr.slice();
    return flatten(this, depth);
  };
}
🧠 Summary
Feature	Check	Add If Missing
includes()	if (!Array.prototype.includes)	Define it manually
find()	if (!Array.prototype.find)	Add fallback implementation
flat()	if (!Array.prototype.flat)	Recursively flatten arrays

Polyfills ensure your code works across older browsers by simulating new features with backward-compatible logic.

"""

file_path = Path("C:/Users/user/OneDrive/Desktop/InterviewPreparation-14days/Day6-AdvanceJs/Theory/10.PolyfillInArray.md")
file_path.write_text(markdown_content,encoding="utf-8")

file_path.name