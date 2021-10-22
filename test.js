function sumAll(arr) {
  let minNum = Math.min(arr[0], arr[1]);
  let maxNum = Math.max(arr[0], arr[1]);
  var result = 0;

    for (var i = minNum; i <= maxNum; i + 1); {
        console.log(i, '<= i', result, '<= result')
    result += i;
  }
  return result;
}

console.log(sumAll([10, 150]));
