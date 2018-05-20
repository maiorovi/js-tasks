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

// Complete the workbook function below.
function workbook(n, k, arr) {
    let unique = 0;
    let currentPage = 1;
    for(let i = 0; i < n; i++) {
        let pagesTaken = Math.ceil(arr[i] / k);

        for(let j = 1; j <= pagesTaken; j++) {
            let minProblemNumber =  (j * k) - (k - 1);
            let maxProblemNumber =  Math.min((j * k), arr[i]);
            if (currentPage >= minProblemNumber && currentPage <= maxProblemNumber ) {
                unique++;
            }

            currentPage++;
        }
    }

    return unique;
}

function main() {
    const ws = fs.createWriteStream("G:\\Projects\\js-tasks\\hackerrank\\result.txt");

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = workbook(n, k, arr);

    ws.write(result + "\n");

    ws.end();
}
