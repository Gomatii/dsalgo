class BinarySearch {
    static iterativeBinarySearch(array, valueToSearch) {
      let low = 0;
      let high = array.length - 1;
  
      while (low <= high) {
        const middle = Math.floor((low + high) / 2);
  
        if (array[middle] < valueToSearch) {
          low = middle + 1;
        } else if (array[middle] > valueToSearch) {
          high = middle - 1;
        } else {
          return middle; // Value found at index `middle`
        }
      }
      return -1; // Value not found
    }
  
    static recursiveBinarySearch(array, valueToSearch, low, high) {
      if (high < low) return -1; // Base case: value not found
  
      const middle = Math.floor((low + high) / 2);
  
      if (array[middle] === valueToSearch) {
        return middle; // Value found at index `middle`
      } else if (array[middle] > valueToSearch) {
        return this.recursiveBinarySearch(array, valueToSearch, low, middle - 1); // Search left
      } else {
        return this.recursiveBinarySearch(array, valueToSearch, middle + 1, high); // Search right
      }
    }
  }
  
  // Example usage:
  const arrayToSearch = [1, 4, 5, 6, 7, 10, 14, 15, 21, 33, 34];
  console.log(BinarySearch.iterativeBinarySearch(arrayToSearch, 6));  // Output: 3
  console.log(BinarySearch.recursiveBinarySearch(arrayToSearch, 15, 0, arrayToSearch.length - 1)); // Output: 7
  