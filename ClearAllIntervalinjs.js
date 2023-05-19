//To implement a function that clears all intervals in JavaScript, you can maintain a list of interval IDs and use the clearInterval function to clear each interval. Here's an example implementation:

function clearAllIntervals() {
  // Array to store interval IDs
  const intervalIds = [];

  // Function to add interval IDs to the array
  function addIntervalId(id) {
    intervalIds.push(id);
  }

  // Function to clear all intervals
  function clearIntervals() {
    intervalIds.forEach(id => clearInterval(id));
    intervalIds.length = 0; // Clear the array
  }

  // Override the setInterval function to automatically add interval IDs
  const originalSetInterval = window.setInterval;
  window.setInterval = function(callback, delay, ...args) {
    const id = originalSetInterval(callback, delay, ...args);
    addIntervalId(id);
    return id;
  };

  // Return the clearIntervals function
  return clearIntervals;
}

//
//In this implementation, the clearAllIntervals function sets up a mechanism to keep track of interval IDs. It overrides the setInterval function with a custom implementation that adds the generated interval ID to the intervalIds array. The clearIntervals function uses clearInterval to clear each interval by iterating over the intervalIds array and then clears the array itself.

//To use this implementation, you can create an instance of the clearIntervals function and call it whenever you want to clear all intervals, like this:

const clearIntervals = clearAllIntervals();

// Example usage:
const interval1 = setInterval(() => {
  console.log('Interval 1');
}, 1000);

const interval2 = setInterval(() => {
  console.log('Interval 2');
}, 2000);

// Clear all intervals
clearIntervals();

// In this example, two intervals are set up using the regular setInterval function. Then, clearIntervals is called to clear all intervals.

// Note that this implementation overrides the global setInterval function, which may have unintended consequences if other parts of your code rely on its default behavior. Make sure to use this implementation judiciously and consider the impact on other code in your project.