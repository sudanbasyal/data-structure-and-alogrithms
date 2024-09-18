function bubbleSort(my_list) {
  let length = my_list.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (my_list[j] > my_list[j + 1]) {
        let temp = my_list[j];
        my_list[j] = my_list[j + 1];
        my_list[j + 1] = temp;
      }
    }
  }
  return my_list;
}

console.log(bubbleSort([5, 3, 8, 6, 2])); // [2, 3, 5, 6, 8]
