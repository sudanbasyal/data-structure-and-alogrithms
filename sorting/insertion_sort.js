function insertionSort(my_list) {
  let length = my_list.length;

  for (let i = 1; i < length; i++) {
    number_to_order = my_list[i];
    let j = i - 1;
    while (j >= 0 && number_to_order < my_list[j]) {
      my_list[j + 1] = my_list[j];
      j--;
    }
    my_list[j + 1] = number_to_order;
  }
  return my_list;
}

console.log(insertionSort([5, 3, 8, 6, 2])); // [2, 3, 5, 6, 8]