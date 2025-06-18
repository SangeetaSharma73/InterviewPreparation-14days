function memoize(fn) {
  // Cache to store previously computed results
  const cache = new Map();

  return function (...args) {
    // Create a cache key from the arguments (convert to string for simple comparison)
    const key = JSON.stringify(args);

    // If the result is in the cache, return it
    if (cache.has(key)) {
      console.log("Returning from cache");
      return cache.get(key);
    }

    // Otherwise, compute the result and store it in the cache
    console.log("Computing result");
    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

// Example of usage:

// A CPU-intensive function (e.g., Fibonacci calculation)
function slowFibonacci(n) {
  if (n <= 1) return n;
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

// Wrapping the slowFibonacci with memoization
const memoizedFibonacci = memoize(slowFibonacci);

console.log(memoizedFibonacci(35)); // Slow on first call
console.log(memoizedFibonacci(35)); // Fast on second call (from cache)
console.log(memoizedFibonacci(40)); // Slow, because it's a different input
