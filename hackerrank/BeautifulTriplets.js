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

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
    let count = 0;

    for(let k = arr.length - 1; k >= 2; k--) {
        for (let j = k - 1; j >= 1; j--) {
            for (let i = k - 1; i >= 0; i--) {

                if (arr[k] - arr[j] !== d) {
                    break;
                }

                if(arr[j] - arr[i] > d) {
                    break;
                }

                if (arr[k] - arr[j] === d && arr[j] - arr[i] === d) {
                    count++;
                }

            }
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream("G:\\Projects\\js-tasks\\hackerrank\\result.txt");

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = beautifulTriplets(d, arr);

    ws.write(result + "\n");

    ws.end();
}
