function linearSearch(unordered_list, search_value) {
  for (let i = 0; i < unordered_list.length; i++) {
    if (unordered_list[i] === search_value) {
      return true;
    }
  }
  return false;
}

const list = [1, 3, 5, 7, 9];
console.log(linearSearch(list, 9)); // true
console.log(linearSearch(list, 2)); // true
