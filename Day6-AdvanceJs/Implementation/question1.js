function outer() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log("increment", count);
      return count;
    },
    decrement: function () {
      count--;
      console.log("decrement", count);
      return count;
    },
    getCount: function () {
      console.log(count, "current value");
      return count;
    },
  };
}

const counter = outer();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.getCount(); // 1
