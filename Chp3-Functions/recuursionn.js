function isEvent(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  if (n <= -1) return "Erreur";
  return isEvent(n - 2);
}
console.log(isEvent(50));
console.log(isEvent(75));
console.log(isEvent(-1));
