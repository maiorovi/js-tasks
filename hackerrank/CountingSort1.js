'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingSort function below.
function countingSort(arr) {
    let m = max(arr);
    let counts = new Array(m+1);

    for(let i = 0; i < counts.length; i++) {
        counts[i] = 0;
    }


    for(let i = 0; i < arr.length; i++) {
        let ind = arr[i];
            counts[ind]++;
    }

    return counts;
}

function max(arr) {
    let max = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    return max;
}

function main() {
    const ws = fs.createWriteStream("G:\\Projects\\js-tasks\\hackerrank\\result.txt");

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = countingSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
