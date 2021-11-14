function sumFibs(num) {
  let fibSeq = [0, 1];
  let counter = fibSeq[fibSeq.length - 2] +
    fibSeq[fibSeq.length - 1]
  while (counter <= num) {
    fibSeq.push(counter);
    counter = fibSeq[fibSeq.length - 2] +
      fibSeq[fibSeq.length - 1]

  }
  let sumOfFibNum = 0;
  fibSeq.forEach(num => {
    if (num % 2 != 0) {
      sumOfFibNum += num;
    }
  });
  return sumOfFibNum;
}

let result = sumFibs(75024);
console.log(result);