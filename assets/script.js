var countdown = document.querySelector(".countdown");
var startQuizz = document.querySelector(".startQuizz");
var highScores = document.querySelector(".score");
var theQuestions = document.querySelector(".questions");
var theAnswers = document.querySelector(".answers");

var timeLeft = 10;
var score = 0;
var currentQuestion = -1;
var mistakes= 5;
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



function answers () {
   
}
   

function gameOver (timeInterval) {
    clearInterval(timeInterval);
    var displayMessage = `
        <h3>Game over</h3>
        <p>Your score:</p>
        <input type="text" id="name" placeholder="First name"> 
        <button onclick="setScore()" class= "buttonScore">Set score!</button>
    `
    document.querySelector(".quizz").innerHTML = displayMessage;
}

