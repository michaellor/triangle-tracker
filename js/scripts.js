var triangle = function(a,b,c) {

  if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
    return false;
  } else if (a === b && b === c && c === a) {
    return true;
  } else if (a === b || b === c || c === a) {
    return true;
  } else if (a !== b && b !== c && c !== a) {
    return true;
  }
  else {
    return false;
  }
}
