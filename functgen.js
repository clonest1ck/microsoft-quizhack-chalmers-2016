// Functgen contains 24 different functions that return f(1) = 2 and f(2) = 1

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
  var dict = {"1": 2, "2": 1};
  return dict[i.toString()];
}

function eleven(i) {
  try {
    if(i == 1) {
        throw "2";
    } else if(i == 2) {
      throw "1";
    }
  } catch (e) {
    return e;
  }
}

function twelve(i) {
  return (i - 2) * -i + 1;
}

function thirteen(i) {
  return i ^ 3;
}

function fourteen(i) {
  return (~ i) & 3;
}

function fifteen(i) {
  return ~(i & 3) & 3;
}

function sixteen(i) {
  var x = Math.random();
  var y = x;
  var k;
  for(; i != 2; i++) {
    x += x;
  }
  return x / y;
}

function seventeen(i) {
  if(i == 1) {
    return ~(i | (~2));
  } else if (i == 2) {
    return ~(i | (~1));
  }
}

function eighteen(i) {
  return (i.toString().charCodeAt(0) - 1) % 2 + ((i.toString().charCodeAt(0)) % 2) * 2;
}

function nineteen(i) {
  return -Math.abs(i-1) + 2;
}

function twenty(i) {
  return Math.ceil(14.4062-14.7435*Math.sin(i));
}

function twentyone(i) {
  return Math.ceil(2-1.4427*Math.log(i));
}

function twentytwo(i) {
  return Math.round(4 * Math.pow(Math.E, -0.693147*i));
}

function twentythree(i) {
  var str = "12";
  return str.replace(i, '');
}

function twentyfour(i) {
  var list = [1,2];
  var x = list.filter(x => x != i);
  return x[0];
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

console.log(nine(1));
console.log(nine(2));

console.log(ten(1));
console.log(ten(2));

console.log(eleven(1));
console.log(eleven(2));

console.log(twelve(1));
console.log(twelve(2));

console.log(thirteen(1));
console.log(thirteen(2));

console.log(fourteen(1));
console.log(fourteen(2));

console.log(fifteen(1));
console.log(fifteen(2));

console.log(sixteen(1));
console.log(sixteen(2));

console.log(seventeen(1));
console.log(seventeen(2));

console.log(eighteen(1));
console.log(eighteen(2));

console.log(nineteen(1));
console.log(nineteen(2));

console.log(twenty(1));
console.log(twenty(2));

console.log(twentyone(1));
console.log(twentyone(2));

console.log(twentytwo(1));
console.log(twentytwo(2));

console.log(twentythree(1));
console.log(twentythree(2));

console.log(twentyfour(1));
console.log(twentyfour(2));
