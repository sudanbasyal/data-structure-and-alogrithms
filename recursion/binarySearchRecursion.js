function binarySearch(ordered_list, search_value) {
  if (ordered_list.length === 0) {
    return false;
  } else {
    const middle = Math.floor(ordered_list.length / 2);
    if (search_value === ordered_list[middle]) {
      return true;
    } else if (search_value < ordered_list[middle]) {
      return binarySearch(ordered_list.slice(0, middle), search_value);
    } else {
      return binarySearch(ordered_list.slice(middle + 1), search_value);
    }
  }
}

const list = [1, 3, 5, 7, 9];

console.log(binarySearch(list, 9)); // true
console.log(binarySearch(list, 2)); // false
