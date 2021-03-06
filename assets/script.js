var countdown = document.querySelector(".countdown");
var startQuizz = document.querySelector(".startQuizz");
var highScores = document.querySelector(".score");
var theQuestions = document.querySelector(".questions");
var theAnswers = document.querySelector(".answers");
var introduction = document.querySelector(".introduction");
var message = document.querySelector(".message");
var quizDisplay = document.querySelector(".quizz");
var scoreDisplay = document.querySelector(".displayScore");

var timeLeft = 60;
var score = 0;
var currentQuestion = -1;
var mistakes= 10;
var correct;

var poll = [
    {
    question: "Led the first expedition around the Cape of Good Hope?",
    options: ["Americo Vespucci", "Pedro Álvares Cabral", "Christopher Columbus", "Bartolomeu Dias"],
    answer: "Bartolomeu Dias"
},{
    question: 'City that is considered the origin of the modern "games" whose name derives from the site?',
    options: ["Constantinople", "Olympia", "Athens", "Tebas"],
    answer: "Olympia"
},{
    question: "Whats was the name of Franz Ferdinand's assassin?",
    options: ["Gavrilo Princip", "Theobal vonTheobald von Bethmann", "Georges Clemenceau", "Ferdinand Foch"],
    answer: "Gavrilo Princip"
},{
    question: "Who was known as the Iron Chancellor?",
    options: ["Winston Churchill", "Wilhem II", "Otto Von Biscmarck", "Hermann Goering"],
    answer: "Otto Von Biscmarck"
}
]

startQuizz.addEventListener('click', startGame)

function startGame (){
  
    var timeInterval = setInterval(function () {
        timeLeft--;
        countdown.innerHTML = timeLeft;
        if (timeLeft === 0 || currentQuestion === poll.length) {
            clearInterval(timeInterval);
            gameOver () 
        }
    },1000);
    questions();
    startQuizz.style.display = 'none';
    introduction.style.display = 'none';
}

function questions (){
    currentQuestion++;

    theQuestions.innerHTML = poll[currentQuestion].question;
    correct = poll[currentQuestion].answer
    theAnswers.innerHTML = "";


    var choices = poll[currentQuestion].options;

    for (var i = 0; i < choices.length; i++) {
        var next = document.createElement("button");

        next.innerHTML = choices[i]
        answerBtn = theAnswers.append(next);
    }
}
 
theAnswers.addEventListener('click', function (event) {
    var element = event.target;

        if (element.textContent == poll[currentQuestion].answer) {
            score++;
            message.textContent = "Correct!";
        } else {
            timeLeft = timeLeft - mistakes;
            message.textContent = "Wrong! The correct answer is:  " + poll[currentQuestion].answer;
        }
        questions();
});



function gameOver (timeInterval) {
    clearInterval(timeInterval);
    var displayMessage = `
        <h3>Game over</h3>
        <p>Your score: ` + score +  ` </p>
        <input type="text" id="name" placeholder="First name"> 
        <button onclick="setScore()" class= "buttonScore">Set score!</button>
    `
    quizDisplay.innerHTML = displayMessage;
}

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("name",document.getElementById('name').value);
    displayScore ()
}

function displayScore () {
    var userName = localStorage.getItem("name");
    var count = localStorage.getItem("highscore");

    scoreDisplay.textContent = userName + ": " + count;
}
