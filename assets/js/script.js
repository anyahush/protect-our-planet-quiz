// Amended code from W3 school
// Get the modal
var modal = document.getElementById("my-modal");

// Get the button that opens the modal
var btn = document.getElementById("play-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// quiz

// constants
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const playButton = document.getElementById("play-btn");
const contactButton = document.getElementById("contact-btn");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-btns");
const scoreText = document.getElementById("score-text");

const questions = [{
  question: 'What is climate change otherwise called global warming?',
  answers: [{
      text: 'Our planet heating up',
      correct: true
    },
    {
      text: 'Our planet getting colder',
      correct: false
    },
    {
      text: 'Our planet staying the same',
      correct: false
    },
  ]
},
{
  question: 'Energy from wind, water and the Sun is called _____ energy.',
  answers: [{
      text: 'Renewable',
      correct: true
    },
    {
      text: 'Fossil fuel',
      correct: false
    },
    {
      text: 'Non-renewable',
      correct: false
    }
  ]
},
{
  question: 'Which of the following is a type of non-renewable energy?',
  answers: [{
      text: 'Solar',
      correct: false
    },
    {
      text: 'Wind',
      correct: false
    },
    {
      text: 'Coal',
      correct: true
    }
  ]
},
{
  question: 'Using _____ energy damages the habitats of animals and plants and contributes to global warming.',
  answers: [{
      text: 'Renewable',
      correct: false
    },
    {
      text: 'Non-renewable',
      correct: true
    },
    {
      text: 'Hydro',
      correct: false
    }
  ]
},
{
  question: 'Renewable energy sources like wind, solar and hydro are ______.',
  answers: [{
      text: 'Bad for the environment',
      correct: false
    },
    {
      text: 'Unsustainable',
      correct: false
    },
    {
      text: 'Sustainable',
      correct: true
    }
  ]
},
{
  question: 'Recycling your rubbish means ______.',
  answers: [{
      text: 'Making your rubbish into something new',
      correct: true
    },
    {
      text: 'Putting it in the bin for landfill',
      correct: false
    },
    {
      text: 'Giving it to a neighbour',
      correct: false
    }
  ]
},
{
  question: 'Which of these items can be recycled?',
  answers: [{
      text: 'Cling film',
      correct: false
    },
    {
      text: 'Paper',
      correct: true
    },
    {
      text: 'Tin foil',
      correct: false
    }
  ]
},
{
  question: 'Instead of using cling film to wrap your sandwich, you could use ____?',
  answers: [{
      text: 'Nothing',
      correct: false
    },
    {
      text: 'Tin foil',
      correct: false
    },
    {
      text: 'A resuseable lunchbox or tub',
      correct: true
    }
  ]
},
{
  question: 'Which of these human activities is good for the environment?',
  answers: [{
      text: 'Cutting down forests',
      correct: false
    },
    {
      text: 'Dropping litter',
      correct: false
    },
    {
      text: 'Protecting animals',
      correct: true
    }
  ]
},
{
  question: 'Why is plastic in the oceans a big problem?',
  answers: [{
      text: 'The animals like to play with plastic',
      correct: false
    },
    {
      text: 'Animals may eat it',
      correct: true
    },
    {
      text: 'It isn"t a problem',
      correct: false
    }
  ]
},
{
  question: 'What is the name for when waste is reused or turned into something else?',
  answers: [{
      text: 'Remaking',
      correct: false
    },
    {
      text: 'Transferring',
      correct: false
    },
    {
      text: 'Recyling',
      correct: true
    }
  ]
},
{
  question: 'What causes climate change?',
  answers: [{
      text: 'Burning fossil fuels such as coal',
      correct: true
    },
    {
      text: 'Doing star jumps',
      correct: false
    },
    {
      text: 'Recycling your rubbish',
      correct: false
    }
  ]
},
{
  question: 'Instead of buying disposable plastic bottles, which one is a solution?',
  answers: [{
      text: 'Don"t drink water out of bottles',
      correct: false
    },
    {
      text: 'Use a reuseable bottle',
      correct: true
    },
    {
      text: 'Use a disposable cup',
      correct: false
    }
  ]
},
{
  question: 'What is a fossil fuel?',
  answers: [{
      text: 'A natural fuel formed over millions of years from the remains of dead animals and plants.',
      correct: true
    },
    {
      text: 'A source of energy that will not run out',
      correct: false
    },
    {
      text: 'Wood',
      correct: false
    }
  ]
},
{
  question: 'What is a renewable energy source?',
  answers: [{
      text: 'Oil',
      correct: false
    },
    {
      text: 'A fuel that has been formed over millions of years and will run out',
      correct: false
    },
    {
      text: 'A natural source of energy that will not run out',
      correct: true
    }
  ]
},
{
  question: 'What type of harmful gases surround the Earth?',
  answers: [{
      text: 'Solar gases',
      correct: false
    },
    {
      text: 'Natural gases',
      correct: false
    },
    {
      text: 'Greenhouse gases',
      correct: true
    }
  ]
},
{
  question: 'Why does driving cars contribute to climate change?',
  answers: [{
      text: 'Petrol and diesel, that fuel cars, are fossil fuels and release greenhouse gases',
      correct: true
    },
    {
      text: 'They make the roads busy',
      correct: false
    },
    {
      text: 'Cars don"t have any impact on the environment',
      correct: false
    }
  ]
},
{
  question: ' Instead of travelling by car, how can you travel that is better for the environment?',
  answers: [{
      text: 'Aeroplane',
      correct: false
    },
    {
      text: 'Taxi',
      correct: false
    },
    {
      text: 'Walking or cycling',
      correct: true
    }
  ]
},
{
  question: 'Climate change affects wildlife as well. Arctic ice is melting, which animal lives there and is at risk?',
  answers: [{
      text: 'Apes',
      correct: false
    },
    {
      text: 'Polar bears',
      correct: true
    },
    {
      text: 'Turtles',
      correct: false
    }
  ]
},
{
  question: 'Why is recycling good?',
  answers: [{
      text: 'It reduces how much rubbish goes to landfill',
      correct: true
    },
    {
      text: 'It is fun',
      correct: false
    },
    {
      text: 'It allows us to buy more things',
      correct: false
    }
  ]
}
];
// let
let shuffledQuestions;
let currentQuestionIndex;
let score;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
})

function startGame () {
  console.log("Game started");

  startButton.classList.add("hide");
  playButton.classList.add("hide");
  contactButton.classList.add("hide");
  greeting.classList.add("hide");
  quizContainer.classList.remove("hide");

  currentQuestionIndex = 0;
  score = 0;

  shuffledQuestions = questions.sort(() => Math.random() - .5);

  nextQuestion();
}

function nextQuestion () {
  resetQuestion();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  })

}

function resetQuestion () {
  nextButton.classList.add("hide");
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer () {

}