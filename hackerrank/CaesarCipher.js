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

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    let encrypted = [];

    for(let i = 0; i < s.length; i++) {
        let character = s.charAt(i);
        let position = findIndex(character.toLowerCase());

        if (position !== -1) {
            let newPos = (position + k) % 26;
            let newChar = alphabet[newPos];
            encrypted.push(isUppercaseCharacter(character) ? newChar.toUpperCase() : newChar);
        } else {
            encrypted.push(character);
        }
    }

    return encrypted.join("");
}

function isUppercaseCharacter(ch) {
    return ch === ch.toUpperCase();
}

function findIndex(character) {
    for(let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === character) {
            return i;
        }
    }

    return -1;
}

function main() {
    const ws = fs.createWriteStream('G:\\Projects\\js-tasks\\hackerrank\\result.txt');

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}
