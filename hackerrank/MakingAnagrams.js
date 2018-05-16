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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    let m1 = builDictionary(s1);
    let m2 = builDictionary(s2);
    let counter = 0;

    for(let [key, value] of m1.entries()) {
        if (m2.has(key)) {
            let v = m2.get(key);
            counter += Math.abs(v - value);
        } else {
            counter += value
        }
    }

    for(let [key, value] of m2.entries()) {
        if (!m1.has(key)) {
            counter += value
        }
    }

    return counter;
}

function builDictionary(s1) {
    let m1 = new Map();

    for(let i = 0; i < s1.length; i++) {
        let key = s1.charAt(i);
        if (m1.has(key)) {
            let value = m1.get(key);
            m1.set(key, value + 1);
        } else {
            m1.set(key, 1);
        }
    }

    return m1;
}

function main() {
    const ws = fs.createWriteStream("G:\\Projects\\js-tasks\\hackerrank\\result.txt");

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
