function createCounter() {
  let count = 0; 

  return {
    increment: function () {
      count++;
      console.log(count);
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.increment(); // Output: 3
