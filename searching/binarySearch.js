function binarySearch(ordered_list, search_value) {
  let first = 0;
  let last = ordered_list.length - 1;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (search_value === ordered_list[middle]) {
      return true;
    } else if (search_value < ordered_list[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return false;
}

const list = [1, 3, 5, 7, 9];

console.log(binarySearch(list, 9)); // true
console.log(binarySearch(list, 4)); // false
