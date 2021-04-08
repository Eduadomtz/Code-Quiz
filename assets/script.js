var time = document.querySelector(".countdown");
var startQuizz = document.querySelector(".startQuizz");
var highScores = document.querySelector(".score");
var theQuestions = document.querySelector(".questions");
var answers = document.querySelector("answerButtons");
var ulList = document.querySelectorAll("ul");
var currentQuestion = 0;
var timeLeft = 0;

var score = 0;

var pollIndex = 0;
var poll = [
    {
    question: "Who led the first expedition around the Cape of Good Hope?",
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
    timeLeft = 5;
    var timeInterval = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft === 0 || currentQuestion === poll.length) {
            clearInterval(timeInterval);
            gameOver () 
        }
    },1000);
    nextQuestion ();
    startQuizz.style.display = 'none';
}



function nextQuestion () {
    appearQuestion(poll[currentQuestion]);
        
}

function appearQuestion (question){
    theQuestions.innerText = question.question;
}

function answerSelection (){
    
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