'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    // console.log("data");
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bfs function below.
function bfs(n, m, edges, s) {
    let adjList = buildAdjacencyList(edges, n);
    let seenNodes = new Set();
    let sp = new Map();

    sp.set(s, 0);
    seenNodes.add(s);

    let queue = [];
    queue.push(s);

    while(queue.length > 0) {
        let innerNode = queue.shift();
        let adjacent = adjList.get(innerNode);
        if (adjacent) {

            for (let j = 0; j < adjacent.length; j++) {
                let currentNode = adjacent[j];
                if (seenNodes.has(currentNode)) {
                    continue;
                } else {
                    seenNodes.add(currentNode);
                    queue.push(currentNode);

                    let currentNodePath = sp.get(innerNode) || 0;
                    sp.set(currentNode, currentNodePath + 6);
                }
            }

        }
    }

    for(let i = 1; i <= n; i++) {
        if (!sp.has(i)) {
            sp.set(i, -1)
        }
    }

    sp.delete(s);
    return Array.from(sp.keys())
        .sort((a, b) => a - b)
        .map(k => sp.get(k))
}



function buildAdjacencyList(edges, V) {
    let m = new Map();
    for (let i = 1; i <= V; i++) {
        m.set(i, []);
    }

    for (let i = 0; i<  edges.length; i++) {
        let edge = edges[i];
        let key = edge[0];
        let value = edge[1];

            m.get(key).push(value);
            m.get(value).push(key);
    }

    return m;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH+"\\result.txt");

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine(), 10);

        let result = bfs(n, m, edges, s);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}