function optimizedBubbleSort(my_list) {
  let length = my_list.length;
  let is_sorted = false;
  while (!is_sorted) {
    is_sorted = true;
    for (let i = 0; i < length; i++) {
      if (my_list[i] > my_list[i + 1]) {
        let temp = my_list[i];
        my_list[i] = my_list[i + 1];
        my_list[i + 1] = temp;
        is_sorted = false;
      }
    }
    length--;
  }
  return my_list;
}

console.log(optimizedBubbleSort([5, 3, 8, 6, 2])); // [2, 3, 5, 6, 8]
