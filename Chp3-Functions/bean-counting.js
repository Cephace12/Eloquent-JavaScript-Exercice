function countBs(string) {
  let counted = 0;
  for (let n = 0; n < string.length; n++) {
    if (string[n] == "B") counted++;
  }
  return counted;
}
function countChar(string, ch) {
  let counted = 0;
  for (let n = 0; n < string.length; n++) {
    if (string[n] == ch) counted++;
  }
  return counted;
}
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
