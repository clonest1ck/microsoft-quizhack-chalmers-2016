function one(i) {
  if(i == 1) {
    return 2;
  } else if (i == 2) {
    return 1;
  }
}

function two(i) {
  switch (i) {
    case 1:
      return 2;
      break;
    case 2:
      return 1;
      break;
  }
}

function three(i) {
  return ((i % 2) + 1);
}

function four(i) {
  return 2 / i;
}

function five(i) {
  while(i < 2) {
    i++;
    return i;
  }

  while(i > 1) {
    i--;
    return i;
  }
}

function six(i) {
  var out = [0,2,1];
  return out[i]
}

function seven(i) {
  var k = 3;
  do {
    k--;
    i--;
  } while(i > 0);
  return k;
}

function eight(i) {
  var k;
  for(k = 3; i > 0; i--) {
    k--;
  }
  return k;
}

function nine(i) {
  return 3 - i;
}

function ten(i) {

}

function eleven(i) {
  
}

console.log(one(1));
console.log(one(2));

console.log(two(1));
console.log(two(2));

console.log(three(1));
console.log(three(2));

console.log(four(1));
console.log(four(2));

console.log(five(1));
console.log(five(2));

console.log(six(1));
console.log(six(2));

console.log(seven(1));
console.log(seven(2));

console.log(eight(1));
console.log(eight(2));
