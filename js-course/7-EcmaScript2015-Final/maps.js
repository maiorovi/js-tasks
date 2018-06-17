const question = new Map();

question.set('question', 'What is the official name?')
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again!');

console.log(question);

if(question.has(4)) {
    question.delete(4);
}

console.log(question);
console.log(typeof question.entries());
for (let [key, value] of question.entries()) {
    console.log(`${key}=${value}`)
}