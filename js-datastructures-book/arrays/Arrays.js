var daysOfWeek1 = new Array();
var daysOfWeek2 = new Array(7);
var daysOfWeek3 = new Array('Sunday', 'Monday', 'Tuesday');
var daysOfWeek4 = [];

daysOfWeek3.length;

let fibRecursive = (n)  => {
    if (n === 0 || n === 1) {
        return n;
    }

    return fibRecursive(n-1) + fibRecursive(n-2);
};

let fibIterative = (n) => {
    let fibonacci = [1,1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci[fibonacci.length-1];
};

// console.log(fibIterative(6));

let arr = [1, 2, 3, 4, 5, 6];
//adds member in the end of the array
arr.push(7,8,9);

console.log(arr);

arr.unshift(-2, -1, 0);

console.log(arr);

console.log(arr.pop()); //9

console.log((arr));

console.log(arr.shift());// -2

console.log((arr));
/*
    1. push / pop on array models stack behaviour
    2. shift / unshift on array models queue behaviour
 */


arr.splice(2, 3); //removes 3 elements starting from index 2
console.log(arr);
arr.splice(2, 0, 1, 2, 3);

console.log(arr); //ads 1, 2, 3 to array