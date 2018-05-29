(function() {
    function Question(text, answers, correctOne) {
        this.text = text;
        this.answers = answers;
        this.correctOne = correctOne;

        this.isAnswerCorrect = function(ind) {
            return this.correctOne === ind;
        }
    }

    function Answer(text) {
        this.text =  text;

        this.isCorrect = function() {
            return 'Correct!' === text;
        };

        this.isExitAnswer = function () {
            return 'exit' === text.toLowerCase();
        }
    }

    function GameContext() {
        this.gameScore = 0;

        this.processAnswer = function(answer) {
            if (answer.isCorrect()) {
                this.gameScore++;
            }
        };

        this.printScore = function() {
            console.log('Current score: ' + this.gameScore);
        };
    }

    let questions = [
        new Question('What is the population of Kiev', ['200000', '2 000000', '4 000 000'], '2')
    ];


    function formatQuestion(question) {
        let parts = [question.text];

        for (let i = 0; i < question.answers.length; i++) {
            parts.push(i + ' : ' + question.answers[i]);
        }

        return parts.join('\n');
    }

    function chooseQuestion(questions) {
        let ind = Math.floor(Math.random() % questions.length);

        return questions[ind];
    }

    function evalAnswer(question, answer) {
        if(question.isAnswerCorrect(answer)) {
            return new Answer('Correct!');
        } else {
            return new Answer('Incorrect! Try again later!');
        }
    }

    function askQuestionAndEvalAnswer() {
        let question = chooseQuestion(questions);
        let formattedQuestion = formatQuestion(question);

        console.log(formattedQuestion);

        let answer = prompt('Choose the answer:');

        if (answer === 'exit') {
            return answer;
        }

        return evalAnswer(question, answer);
    }

    function playGame() {
        let gameContext = new GameContext();

        while(true) {
                let answer = askQuestionAndEvalAnswer();
                if( answer.isExitAnswer()) {
                    break;
                }
                gameContext.processAnswer(answer);
                gameContext.printScore();
                console.log('----------------');
        }
    }

    playGame();
})();