process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function minimumNumber(n, password) {
    let n1 = hasNumber(password) ? 0 : 1;
    let lowerCase = hasLowerCaseCharacter(password) ? 0  : 1;
    let upperCase = hasUpperCaseChars(password) ? 0 : 1;
    let sp = hasSpecialChar(password) ? 0 : 1;
    let sum = n1 + lowerCase + upperCase + sp;

    if (password.length < 6) {
        let l = 6 - password.length;
        return l >= sum ? l : sum;
    } else {
        return sum;
    }

}

function hasNumber(str) {
    return /\d/.test(str);
}

function hasLowerCaseCharacter(str) {
    return /(.*[a-z].*)/.test(str)
}

function hasUpperCaseChars(str) {
    return /(.*[A-Z].*)/.test(str);
}

function hasSpecialChar(str) {
    return /[!@#$%^&*()\-+]/.test(str)
}

function main() {
    var n = parseInt(readLine());
    var password = readLine();
    var answer = minimumNumber(n, password);
    process.stdout.write("" + answer + "\n");

}