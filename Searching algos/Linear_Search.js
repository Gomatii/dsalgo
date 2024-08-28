class LinearSearch {
  static linear(array, key) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === key) {
        return index;
      }
    }
    return -1;
  }
}

// Example usage:
const array = [5, 6, 12, 4, 56, 87, 12];
const key = 56;
const index = LinearSearch.linear(array, key);

if (index === -1) {
  console.log("Element not found.");
} else {
  console.log("Element found at index " + index);
}
