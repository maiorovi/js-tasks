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

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let counter = 0;
    let prev = 0;

    for(let i = 1; i < s.length; i++) {
        if (s.charAt(prev) === s.charAt(i)) {
            counter+=1;
            continue;
        }

        prev = i;
    }

    return counter;
}

function main() {
    const ws = fs.createWriteStream("G:\\Projects\\js-tasks\\hackerrank\\result.txt");

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);

        ws.write(result + "\n");
    }

    ws.end();
}
