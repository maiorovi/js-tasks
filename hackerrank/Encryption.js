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

// Complete the encryption function below.
function encryption(s) {
    let withOutSpaces = s.replace(/\s/g, "");
    let number = Math.sqrt(withOutSpaces.length);
    let columns = Math.ceil(number);
    let rows = Math.floor(number);
    if (rows * columns < withOutSpaces.length) {
        rows += 1;
    }
    let buffer = "";

    for (let i = 0; i  < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let charIndex = j * columns + i;
            buffer += withOutSpaces.charAt(charIndex)
        }
        buffer += " ";
    }

    return buffer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH+ "\\result.txt");

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
