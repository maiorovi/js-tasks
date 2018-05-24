
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

// Complete the twoCharaters function below.
function twoCharaters(s) {
    let m = countFrequencies(s);
    let longest = 0;

    for(let key of m.keys()) {
        for(let key1 of m.keys()) {
            if (key1 !== key) {
                // let ch1 = key;
                // let ch2 = key1;
                let candidate = removeAllExceptTwo(s, key, key1);
                if (isAlternating(candidate)) {
                    longest = Math.max(longest, candidate.length);
                }
            }
        }
    }


    return longest;
}

function removeAllExceptTwo(s, ch1, ch2) {
    let r = [];

    for(let i = 0; i <  s.length; i++) {
        let currentCh = s.charAt(i);

        if (currentCh === ch1 || currentCh === ch2)  {
            r.push(currentCh);
        }
    }

    return r.join("")
}

function countFrequencies(s) {
    let m = new Map();

    for(let i = 0; i < s.length; i++ ) {
        let ch = s.charAt(i);

        if (m.has(ch)) {
            let freq = m.get(ch);
            m.set(ch, freq + 1);
        } else {
            m.set(ch, 1);
        }
    }

    return m;
}

function isAlternating(s) {
    let seen = new Set();
    seen.add(s.charAt(0));

    let prevCh = s.charAt(0);

    for(let i = 1; i < s.length; i++) {
        let ch = s.charAt(i);
        seen.add(ch);

        if (seen.size > 2 || prevCh === ch) {
            return false;
        }
        prevCh = ch;
    }

    return true;
}

function main() {
    const ws = fs.createWriteStream("G:\\Projects\\js-tasks\\hackerrank\\result.txt");

    const l = parseInt(readLine(), 10);

    const s = readLine();

    let result = twoCharaters(s);

    ws.write(result + "\n");

    ws.end();
}
