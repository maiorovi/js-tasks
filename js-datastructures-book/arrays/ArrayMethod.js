let arr = [1,2,3,4,5,6,7,8];

console.log(arr.concat([1,2], [3, 4]));


console.log(`every (all in java) : ${arr.every(elem => elem % 2 === 0)}`);

console.log(`filter elem % 2 applied: ${arr.filter(elem => elem % 2 === 0)}`);

console.log(`Join ${arr.join(", ")}`);

console.log(`map in action: ${arr.map(elem => elem * 2)}`);

console.log(`reverse of the array: ${arr.reverse()}`);


console.log(`some function(any in java): ${arr.some(elem => elem % 2)}`);

console.log(`sum reduction: ${arr.reduce((prev, cur, index) => prev + cur)}`);


console.log(`includes: ${arr.includes(7)}`);

console.log(`find even element: ${arr.find(elem => elem % 2 === 0)}`);


//iterator inside array
let numbers = [10, 11, 12 ,13];

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


//entries
console.log(`
--------------------------------
`);
let aEntries = numbers.entries();

// console.log(aEntries.next().value); //[0, 10] - position 0, value 1
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);
while(true) {
    let iteratorResult = aEntries.next();
    if (iteratorResult.done) {
        break;
    }
    console.log(iteratorResult.value)

}

//keys
console.log(`
--------------------------------
`);
let aKeys = numbers.keys();

console.log(aKeys.next()); //{ value: 0, done: false }
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next()); //{ value: undefined, done: true }