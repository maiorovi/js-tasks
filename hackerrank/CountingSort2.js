function countingSort(arr) {

    let max = arr.reduce((acc, elem) => Math.max(acc, elem));
    let count = new Array(max+1).fill(0);

    for(let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }

    var ind = 0
    for(let i = 0; i < count.length; i++) {
        for(let j = ind; count[i] !== 0; count[i]--, j++) {
            arr[j] = i;
            ind++;
        }
    }
    return arr;
}

let arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));