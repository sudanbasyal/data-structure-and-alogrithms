function selectionSort(my_list) {
  let length = my_list.length;
  for (let i = 0; i < length - 1; i++) {
    let index = i;
    let lowest = my_list[i];
    for (let j = i + 1; j < length; j++) {
      // Fix inner loop condition
      if (my_list[j] < lowest) {
        index = j;
        lowest = my_list[j];
      }
    }
    // Swap the found lowest element with the current element
    if (index !== i) {
      [my_list[i], my_list[index]] = [my_list[index], my_list[i]];
    }
  }
  return my_list;
}

console.log(selectionSort([5, 3, 8, 6, 2])); // [2, 3, 5, 6, 8]
