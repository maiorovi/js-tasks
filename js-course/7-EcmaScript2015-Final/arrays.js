// var nodes = document.querySelectorAll('.box');
//
// console.log(nodes);
//
// nodes.forEach(function (node) {
//     node.style.backgroundColor = 'green'
// })

// Array.from(document.querySelectorAll('.box'))
//     .forEach(cur => cur.style.background = 'blue' );

const ages = [12, 17, 8, 21, 14, 14];

console.log(ages.findIndex(age => age >= 18));

console.log(ages.find(age => age >= 18));