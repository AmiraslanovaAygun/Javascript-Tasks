let number = parseInt(prompt("Enter the number (1-200):"));

let sumCount = 0;
if (isNaN(number)) {
  console.log("Please enter the number!!!");
} else {
  if (number >= 1 && number <= 200) {
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        sumCount++;
      }
    }
    if (sumCount == 2) {
      console.log(`${number} is prime number`);
    } else console.log(`${number} is not prime number`);
  } else {
    console.log("Please enter a number in the range 1-200!!!");
  }
}

let primeNumber = "";
for (let i = 1; i <= 200; i++) {
  let sumCount2 = 0;
  for (let j = 1; j <= 200; j++) {
    if (i % j == 0) {
      sumCount2++;
    }
  }
  if (sumCount2 == 2) {
    primeNumber = primeNumber + i + " ";
  }
}
console.log(`Prime numbers are:  ${primeNumber} `);
