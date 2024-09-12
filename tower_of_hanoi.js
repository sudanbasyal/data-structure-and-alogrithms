function tower_of_hanoi(num_disk, from_rod, to_rod, aux_rod) {
  if (num_disk === 1) {
    console.log("Move the disk 1 from rod ", from_rod, " to rod ", to_rod);
    return;
  } else {
    //2,A,C,B
    tower_of_hanoi(num_disk - 1, from_rod, aux_rod, to_rod);
    //1,A,B,C
    console.log(
      "Move the disk ",
      num_disk,
      " from rod ",
      from_rod,
      " to rod ",
      to_rod
    );
    //1,B,C,A
    tower_of_hanoi(num_disk - 1, aux_rod, to_rod, from_rod);
  }
}

tower_of_hanoi(4, "A", "C", "B");
