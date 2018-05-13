function nbDig(n, d) {
    var arr = [];

    for( var i = 0; i <= n;i++ ) {
        arr[i] = i;
    }

    return arr.map(function(value, index) {
        return sqr(value, 2);
    }).map(function(value, index){
       return countdigits(value, d)
    }).reduce(function(acc, r) {
        return acc + r;
    });
}

function sqr(digit, power) {
    return Math.pow(digit, power)
}

function countdigits(number, digit) {
    var stringified = number.toString()
    var count = 0;
    var s = digit.toString();

    for (var i = 0; i < stringified.length; i++) {

        if (stringified.charAt(i) === s) {
          count++;
      }
    }

    return count;
}



console.log(nbDig(25, 1));