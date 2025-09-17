var questions = [
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<script> ", correct: true },
      { text: "<scripting>", correct: false },
      { text: "<js>", correct: false }
    ]
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alert('Hello World');", correct: true },
      { text: "msg('Hello World');", correct: false },
      { text: "msgBox(Hello World);", correct: false },
      { text: "alertBox('Hello World');", correct: false }
    ]
  },
  {
    question: "What year was JavaScript launched?",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1994", correct: false },
      { text: "2000", correct: false }
    ]
  }
];

var questionHa = document.getElementById("question");
var answersHa = document.getElementById("answers");
var nextBtn = document.getElementById("next-btn");
var box = document.getElementById("box");
var result = document.getElementById("result");
var scoreHa = document.getElementById("score");
var restart = document.getElementById("restart");
var canvas = document.getElementById("confetti");
var ctx = canvas.getContext("2d");


var currentQuestionIndex = 0;
var score = 0;

   var confettiRunning = false;
    var confettiId;



function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  result.classList.add("hidden");
  box.classList.remove("hidden");
  nextBtn.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  questionHa.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    var button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answersHa.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersHa.innerHTML = "";
}

function selectAnswer(answer) {
  var correct = answer.correct;
  if (correct) {
    score++;
  }

  Array.from(answersHa.children).forEach(button => {
    button.disabled = true;
    if (button.textContent === answer.text && correct) {
      button.style.background = "#28a745";
    } else if (button.textContent === answer.text && !correct) {
      button.style.background = "#dc3545";
    }
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  box.classList.add("hidden");
  result.classList.remove("hidden");
  scoreHa.textContent = `${score} / ${questions.length}`;
       if (score === 4) {
        startConfetti();
      }
}

restart.addEventListener("click", () => {
  clearConfetti();
  startQuiz();
});

startQuiz();

   // Confetti animation (only if score is 4/4)
var confettiInterval;

function startConfetti() {
  var duration = 3000; 
  var end = Date.now() + duration;

  confettiInterval = setInterval(function () {
    confetti({
      particleCount: 5,
      startVelocity: 10,
      spread: 100,
      origin: { x: Math.random(), y: 0 },
      emojiSize: 600
    });

    if (Date.now() > end) {
      clearInterval(confettiInterval);
    }
  }, 20);
}
function clearConfetti() {
  clearInterval(confettiInterval);
}


// // ////////// win  sound 
var winSound = document.getElementById("win-sound");

function showResult() {
  box.classList.add("hidden");
  result.classList.remove("hidden");
  scoreHa.textContent = `${score} / ${questions.length}`;
  
  if (score === 4) {
    winSound.currentTime = 0;
    winSound.play();         
    startConfetti();
  }
}