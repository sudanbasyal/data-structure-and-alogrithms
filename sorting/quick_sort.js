function quickSort(my_list, start_index, last_index) {
  if (start_index < last_index) {
    let partition_index = partition(my_list, start_index, last_index);
    quickSort(my_list, start_index, partition_index);
    quickSort(my_list, partition_index + 1, last_index);
  }
}
function partition(my_list, start_index, last_index) {
  let pivot = my_list[start_index];
  let left_pointer = start_index + 1;
  let right_pointer = last_index;
  while (true) {
    while (my_list[left_pointer] < pivot && left_pointer < last_index) {
      left_pointer++;
    }
    while (my_list[right_pointer] > pivot && right_pointer >= start_index) {
      right_pointer--;
    }
    if (left_pointer >= right_pointer) {
      break;
    }
    [my_list[left_pointer], my_list[right_pointer]] = [
      my_list[right_pointer],
      my_list[left_pointer],
    ];
  }
  [my_list[start_index], my_list[right_pointer]] = [
    my_list[right_pointer],
    my_list[start_index],
  ];
  return right_pointer;
}

let my_list = [6, 8, 9, 7];
quickSort(my_list, 0, my_list.length - 1);
console.log(my_list); // Output should be a sorted array [2, 6, 7, 9]
