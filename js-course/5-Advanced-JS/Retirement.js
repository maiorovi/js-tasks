function retirement(retirementAge) {
    return function(yearOfBirth) {
        let a = ' years left until retirement';
        let age = 2016 - yearOfBirth;

        return retirementAge - age + a;
    }
}

console.log(retirement(60)(1990));