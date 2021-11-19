function smallestCommons(arr) {
    let lowerNum, higherNum;
    if (arr[0] > arr[1]) {
        lowerNum = arr[1];
        higherNum = arr[0];
    } else {
        lowerNum = arr[0];
        higherNum = arr[1];
    }
    let range = getRange(lowerNum, higherNum);
    // console.log(range);

    let multiple = 1;
    while (multiple < 100000) {
        let higherComMult = (lowerNum * multiple) * higherNum;


        let trueCount = 0;
        for (let i = 0; i < range.length; i += 1) {
            // console.log(higherComMult, range);

            if (higherComMult % range[i] === 0) {
                trueCount += 1;

                // console.log('true count = ', trueCount, 'Range length = ', range.length);
                if (trueCount === range.length) {
                    return higherComMult;
                }
            }
        }

        multiple += 1;
    }

    return arr;
}

function getRange(lowN, highN) {
    let resultRange = [];
    for (let i = lowN; i <= highN; i += 1) {
        resultRange.push(i);
    }
    return resultRange;
}
let result = smallestCommons([1, 3]);
console.log(result);