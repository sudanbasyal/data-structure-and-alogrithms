function mergeSort(my_list) {
  if (my_list.length > 1) {
    let mid = Math.floor(my_list.length / 2);
    let left_half = my_list.slice(0, mid);
    let right_half = my_list.slice(mid);
    mergeSort(left_half);
    mergeSort(right_half);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left_half.length && j < right_half.length) {
      if (left_half[i] < right_half[j]) {
        my_list[k] = left_half[i];
        i++;
      } else {
        my_list[k] = right_half[j];
        j++;
      }
      k++;
    }
    while (i < left_half.length) {
      my_list[k] = left_half[i];
      i++;
      k++;
    }
    while (j < right_half.length) {
      my_list[k] = right_half[j];
      j++;
      k++;
    }
  }
  return my_list;
}

console.log(mergeSort([10, 3, 8, 6, 2])); // [2, 3, 5, 6, 8]
