function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // this.calculateAge = function () {
    //     return 2018 - yearOfBirth;
    // }
}
Person.prototype.calculateAge = function () {
    return 2018 - this.yearOfBirth;
}
let p = new Person('Egor', 1990, 'Software Engineer');

console.log(p.calculateAge());
console.log(p);

var egm = {
    name :' Egor',
    yearOfBirth : 1990,
    job: 'teacher'
};
console.info([1,2,3]);
egm.__proto__ = Person.prototype;
console.log(egm.calculateAge());
console.log(egm.__proto__);