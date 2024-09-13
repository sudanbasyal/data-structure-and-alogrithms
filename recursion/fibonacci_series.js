function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
//displays the nth number in the fibonacci series
console.log(fibonacci(6)); // 8

function fibonacciSequence(n) {
  let sequence = [];

  // Handle base cases
  if (n >= 1) {
    sequence.push(0);
  }
  if (n >= 2) {
    sequence.push(1);
  }

  // Generate the sequence iteratively
  for (let i = 2; i < n; i++) {
    console.log(sequence[i - 1], sequence[i - 2]);
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Example: Display Fibonacci sequence up to n = 6
console.log(fibonacciSequence(6)); // [0, 1, 1, 2, 3, 5]
