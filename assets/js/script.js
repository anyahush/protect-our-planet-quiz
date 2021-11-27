/*jshint esversion: 6 */

//Modal content from Stack Overflow, full details in README.md
var btn = document.querySelectorAll("button.modal-button");
var modals = document.querySelectorAll('.modal');
var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.preventDefault();
        let modal = document.querySelector(e.target.getAttribute("data-target"));
        modal.style.display = "block";
    };
}

for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    };
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
};
// End of Stack Overflow content

// Contact form
// Modified from W3 schools tutorial, full details in README.md
function closeModal() {
    var myModal2 = document.getElementById("myModal2");
    if (myModal2.style.display === "none") {
        myModal2.style.display = "block";
    } else {
        myModal2.style.display = "none";
        alert("Thank you for your enquiry. We will respond as soon as possible.");
    }
}
// End of W3 schools 

// Quiz amended from Web Dev Simplified, full details in README.md

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const nextLevelButton = document.getElementById("next-level-btn");
const playButton = document.getElementById("play-btn");
const soundButton = document.getElementById("sound-btn");
const homeButton = document.getElementById("home-btn");
const contactButton = document.getElementById("contact-btn");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const questionCounterText = document.getElementById("question-counter");
const answerButtons = document.getElementById("answer-btns");
const levelHeading = document.getElementById("level-heading");
const scoreText = document.getElementById("score-text");
const greeting = document.getElementById("greeting");
const greetingHeading = document.getElementById('greeting-heading');
const greetingInfo = document.getElementById("greeting-info");

const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");
const levelCompleteSound = document.getElementById("level-complete-sound");

const maxQuestions = 10;

let shuffledQuestions;
let currentQuestion;
let currentQuestionIndex;
let score;
let levelScores = [];
let easy = [];
let medium = [];
let hard = [];
let level = [easy, medium, hard];
let userCanAnswer = true;
let isPlaying = true;

// fetch("assets/js/easy-questions.json")
// //     .then(res => res.json())
//     .then(data => {
//         easy = data;
//     })
//     .catch((error) => {
//         alert("Could not load questions!");
//     })

// fetch("assets/js/medium-questions.json")
//     .then(res => res.json())
//     .then(data => {
//         medium = data;
//     })
//     .catch((error) => {
//         alert("Could not load questions!");
//     })

// fetch("assets/js/hard-questions.json")
//     .then(res => res.json())
//     .then(data => {
//         hard = data;
//     })
//     .catch((error) => {
//         alert("Could not load questions!");
//     })

fetch("assets/js/questions.json")
    .then(res => res.json())
    .then(data => {
        questions = data;
    })
    .catch((error) => {
        alert("Could not load questions!");
    })

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
});

soundButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    console.log(isPlaying);
});

homeButton.addEventListener("click", function() {
    startButton.classList.remove("hide");
    startButton.innerText = "Let's Play";
    playButton.classList.remove("hide");
    contactButton.classList.remove("hide");
    greeting.classList.remove("hide");
    greetingHeading.innerText = "Greetings Earthlings!";
    greetingInfo.innerText = "Carbon Kid and Eco Girl need your help to protect our planet! <br> Your mission is to learn about the environment and how you can help. Good luck!";
    quizContainer.classList.add("hide");
    homeButton.classList.add("hide");
    nextButton.classList.add("hide");
    soundButton.classList.add("hide");
});


// Starts game
function startGame() {
    startButton.classList.add("hide");
    playButton.classList.add("hide");
    contactButton.classList.add("hide");
    greeting.classList.add("hide");
    quizContainer.classList.remove("hide");
    homeButton.classList.remove("hide");
    soundButton.classList.remove("hide");
    startLevel(easy);
}

// Starts a new level
function startLevel(level) {
    questionContainer.classList.remove("hide");
    answerButtons.classList.remove("hide");
    nextLevelButton.classList.add("hide");

    // Changes level heading 
    if (levelScores[1] > 0) {
        levelHeading.innerText = 3;
    } else if (levelScores[0] > 0) {
        levelHeading.innerText = 2;
    } else {
        levelHeading.innerText = 1;
    }

    currentQuestionIndex = 0;
    score = 0;
    shuffledQuestions = level.sort(() => Math.random() - '.5');

    nextQuestion();
}

//Shows next question
function nextQuestion() {
    userCanAnswer = true;
    resetQuestion();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    questionCounterText.innerHTML = `${currentQuestionIndex}/${maxQuestions}`;
    scoreText.innerHTML = `${score}`;
}

//Displays question
function showQuestion(level) {
    questionContainer.innerText = level.question;
    level.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

// Resets question
function resetQuestion() {
    nextButton.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Assesses whether selected answer is correct and adds to score
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    if (userCanAnswer) {
        if (selectedButton.dataset === true) {
            score++;
            selectedButton.style.backgroundColor = 'green';
            if (isPlaying) {
                correctSound.play();
            }

        } else {
            selectedButton.style.backgroundColor = 'red';
            if (isPlaying) {
                incorrectSound.play();
            }
        }
        userCanAnswer = false;

        if (currentQuestionIndex === maxQuestions) {
            endLevel();
        } else {
            nextButton.classList.remove("hide");
        }
    }

    //Ends level once max questions reached
    function endLevel() {
        answerButtons.classList.add("hide");
        questionContainer.classList.add("hide");

        levelScores.push(score);
        if (levelScores[0] >= 7 && levelScores[1] >= 7 && levelScores[2] >= 7) {
            nextLevelButton.classList.add("hide");
            quizContainer.classList.add('hide');
            greeting.classList.remove("hide");
            greetingHeading.innerText = "Congratulations!";
            greetingInfo.innerText = `You have completed PROTECT OUR PLANET! You got ${score}/${currentQuestionIndex}! You have helped Carbon Kid and Eco Girl on their mission but the quest isn't over yet. Remember to give these actions a go!`;
            if (isPlaying) {
                levelCompleteSound.play();
            }
        } else if (score >= 7) {
            nextLevelButton.classList.remove("hide");
            nextLevelButton.addEventListener("click", nextLevel);
        } else {
            levelScores = [];
            if (isPlaying) {
                incorrectSound.play();
            }
            quizContainer.classList.add('hide');
            greeting.classList.remove("hide");
            greetingHeading.innerText = "Ooops!";
            greetingInfo.innerText = `You got ${score}/${currentQuestionIndex}! Well done but not enough to pass to the next level. Give it a go, and try again!`;
            startButton.classList.remove("hide");
            startButton.innerText = "Try again";
            startButton.addEventListener("click", startGame);
        }
    }

    // Generates next level
    function nextLevel() {
        levelCompleteSound.play();
        if (levelScores[0] >= 7 && levelScores[1] >= 7) {
            nextLevelButton.classList.remove("hide");
            nextLevelButton.addEventListener("click", startLevel(hard));
        } else if (levelScores[0] >= 7) {
            startLevel(medium);
        }
    }
}

// End of content from Web Dev Simplified