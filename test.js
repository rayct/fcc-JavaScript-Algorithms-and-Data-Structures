function fearNotLetter(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let startPos = alpha.indexOf(str[0]);
    let accurateAlpha = alpha.slice(startPos);

    for (let i = 0; i < str.length; i += 1) {
    if (str[i] != accurateAlpha[i]) {
      return accurateAlpha[i];
    }
  }
}

console.log(fearNotLetter("abce"));