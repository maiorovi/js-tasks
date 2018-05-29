var years = [1990, 1965, 1937, 2005, 1998];

function arrayCacl(arr, fn) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }

    return newArr;
}

console.log(arrayCacl(years, (y) => y -5));

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' , can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')("Qqq");
interviewQuestion('designer')("Qqq");