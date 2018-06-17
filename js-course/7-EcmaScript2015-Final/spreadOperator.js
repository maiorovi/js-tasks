function addFourAges(a, b, c, d) {
    return a+ b+c+d;
}

let ages= [18, 30, 12, 21];
const sum3 = addFourAges(...ages);
console.log(sum3);

function restParams(a,b,...restParams) {
    console.log(restParams);
}

restParams(1,2,3,4,5,6);

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality= 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

let john = new SmithPerson('John', 1990);

console.log(john);