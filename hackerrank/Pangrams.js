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

// Complete the pangrams function below.
function pangrams(s) {
    let set = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
    ,'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    let lowercased = s.toLowerCase();

    for(let i = 0; i < lowercased.length; i++) {
        if (set.size === 0) {
            return "pangram";
        }

        let c = lowercased.charAt(i);
        set.delete(c)
    }

    if (set.size === 0) {
        return "pangram";
    }

    return "not pangram"
}

function main() {
    const ws = fs.createWriteStream("G:\\Projects\\js-tasks\\hackerrank\\result.txt");

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}
