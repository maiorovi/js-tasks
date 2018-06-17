class Person {
    constructor(name, yearOfBirth, job='Unknown') {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

class Athelete extends Person {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, year, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(medals);
    }
}

const john6 = new Person('Egor', 1990, 'SoftwareEngineer');

console.log(john6);

Person.greeting();

console.log(john6 instanceof Person);
console.log(typeof john6);
console.log(typeof Person);

let Contact = class {
  constructor(address, phone) {
      this.address = address;
      this.phone = phone;
  }

  printContact() {
      console.log(`address = ${this.address}, phone = ${this.phone}`)
  }
};

console.log(Athelete.name);

new Contact('a', '380503218674').printContact()