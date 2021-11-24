//Modal content from Stack Overflow, full details in README.md
var btn = document.querySelectorAll("button.modal-button");
var modals = document.querySelectorAll('.modal');
var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }
}

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }
}
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
const easy = [{
    question: 'What is climate change?',
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
    question: 'Using _____ energy damages the habitats of animals and plants and adds to climate change.',
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
        text: 'Burning fossil fuels, such as coal',
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
    question: 'Instead of buying disposable plastic bottles, what is a solution?',
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
        text: 'A natural fuel formed over millions of years from dead animals and plants.',
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
        text: 'A natural source of energy that will NOT run out',
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
    question: 'Why does driving cars add to climate change?',
    answers: [{
        text: 'Petrol and diesel are fossil fuels and release greenhouse gases',
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
    question: ' Instead of travelling by car, which option is better for the environment?',
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
    question: 'Climate change is causing Arctic ice to melt. Which animal lives there?',
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

const medium = [{
    question: 'An ______ is where all the animals on Earth affect each other',
    answers: [{
        text: 'Ecosystem',
        correct: true
      },
      {
        text: 'Ocean',
        correct: false
      },
      {
        text: 'Endangered species',
        correct: false
      },
    ]
  },
  {
    question: 'Which creature affects the ecosytem in an extreme way?',
    answers: [{
        text: 'Sharks',
        correct: false
      },
      {
        text: 'Plants',
        correct: false
      },
      {
        text: 'Humans',
        correct: true
      },
    ]
  },
  {
    question: 'Which of the following could you do to help the planet’s ecosystem?',
    answers: [{
        text: 'Recycle',
        correct: true
      },
      {
        text: 'Litter',
        correct: false
      },
      {
        text: 'Chop down trees',
        correct: false
      },
    ]
  },
  {
    question: 'What is the name for plastic objects that are only used once then thrown away?',
    answers: [{
        text: 'Biodegradable plastics',
        correct: false
      },
      {
        text: 'Single-use plastics',
        correct: true
      },
      {
        text: 'Recyclable plastics',
        correct: false
      }
    ]
  },
  {
    question: 'How can we live more sustainably?',
    answers: [{
        text: 'Using landfill sites',
        correct: false
      },
      {
        text: 'Reducing plastic packaging',
        correct: true
      },
      {
        text: 'Throwing plastics in the ocean',
        correct: false
      }
    ]
  },
  {
    question: ' Farming is a cause of climate change. Is it because ______?',
    answers: [{
        text: 'We grow too many plants',
        correct: false
      },
      {
        text: 'Animals like climate change',
        correct: false
      },
      {
        text: 'Cows let out methane, which is a greenhouse gas',
        correct: true
      },
    ]
  },
  {
    question: '_______ is a cause of climate change',
    answers: [{
        text: 'Deforestation',
        correct: true
      },
      {
        text: 'Cycling',
        correct: false
      },
      {
        text: 'Eating less meat',
        correct: false
      },
    ]
  },
  {
    question: 'What is a greenhouse gas?',
    answers: [{
        text: 'A gas that traps heat on Earth',
        correct: true
      },
      {
        text: 'A gas produced by the green housefly',
        correct: false
      },
      {
        text: 'When plants have had too many burritos',
        correct: false
      },
    ]
  },
  {
    question: 'Saving water is also important. What could you do to save water?',
    answers: [{
        text: 'Leaving the tap running when your brush your teeth',
        correct: false
      },
      {
        text: 'Having long showers',
        correct: false
      },
      {
        text: 'Turning off dripping taps',
        correct: true
      },
    ]
  },
  {
    question: 'Where does non-recycled rubbish go?',
    answers: [{
        text: 'Into space',
        correct: false
      },
      {
        text: 'Landfill or burned',
        correct: true
      },
      {
        text: 'A recycling plant',
        correct: false
      },
    ]
  },
  {
    question: "What would you do with a book you didn't want anywmore?",
    answers: [{
        text: 'Throw it in the bin',
        correct: false
      },
      {
        text: 'Burn it',
        correct: false
      },
      {
        text: 'Give it to someone else to read',
        correct: true
      },
    ]
  },
  {
    question: 'Which material needs separating into different colours before recycling?',
    answers: [{
        text: 'Paper',
        correct: false
      },
      {
        text: 'Glass',
        correct: true
      },
      {
        text: 'Steel',
        correct: false
      },
    ]
  },
  {
    question: 'Why is cycling or walking NOT a good way to travel?',
    answers: [{
        text: 'It does NOT releases harmful gases',
        correct: false
      },
      {
        text: 'It releases harmful gases',
        correct: true
      },
      {
        text: 'It helps us keep active',
        correct: false
      },
    ]
  },
  {
    question: 'What have a lot governments agreed to do to help stop global warming?',
    answers: [{
        text: 'Build more coal stations',
        correct: false
      },
      {
        text: 'Stop using electricity',
        correct: false
      },
      {
        text: 'Reduce the amount of fossil fuels burned',
        correct: true
      },
    ]
  },
  {
    question: 'Which of these is an example of single- use plastic?',
    answers: [{
        text: 'A plastic straw',
        correct: true
      },
      {
        text: 'An egg carton',
        correct: false
      },
      {
        text: 'A soup tin',
        correct: false
      },
    ]
  },
  {
    question: 'Trees can help remove carbon dioxide (a greenhouse gas) from the atmosphere by:',
    answers: [{
        text: 'Intimidating it with their height',
        correct: false
      },
      {
        text: 'Breathing it in and breathing out oxygen',
        correct: true
      },
      {
        text: 'Falling down and blocking roads',
        correct: false
      },
    ]
  },
  {
    question: 'Why should we turn lights and other electronics off when not in use?',
    answers: [{
        text: 'Because adults say so',
        correct: false
      },
      {
        text: 'The lights might get bored',
        correct: false
      },
      {
        text: 'We need to save electricity too',
        correct: true
      },
    ]
  },
  {
    question: 'Why is solar energy a good way to generate electricity?',
    answers: [{
        text: "The Sun's energy is not going to run out for billions of years",
        correct: true
      },
      {
        text: "Solar panels look good on people's houses",
        correct: false
      },
      {
        text: 'It produces harmful gases',
        correct: false
      },
    ]
  },
  {
    question: 'When are solar panels NOT useful for generating power?',
    answers: [{
        text: 'During the night',
        correct: true
      },
      {
        text: 'When it is cold',
        correct: false
      },
      {
        text: 'When it is sunny',
        correct: false
      },
    ]
  },
  {
    question: 'How can we help reduce the amount of greenhouse gases released into the atmosphere?',
    answers: [{
        text: 'Using a net to capture carbon dioxide',
        correct: false
      },
      {
        text: 'Flying to the beach with friends',
        correct: false
      },
      {
        text: 'Carpooling (sharing car journeys with other people)',
        correct: true
      },
    ]
  },
  {
    question: 'A warmer climate can affect our planet in lots of ways such as more rain, melting sea ice and ________',
    answers: [{
        text: 'Rising sea levels',
        correct: false
      },
      {
        text: 'Unpredictable and changeable weather',
        correct: false
      },
      {
        text: 'All of the above',
        correct: true
      },
    ]
  },

];

const hard = [{
    question: 'How much plastic enters the ocean each year? For example: 1 tonne of waste is about the same as a great white shark!',
    answers: [{
        text: '8 tonnes',
        correct: false
      },
      {
        text: '800 tonnes',
        correct: false
      },
      {
        text: '8 million tonnes',
        correct: true
      },
    ]
  },
  {
    question: 'Deforestation is the clearing of forest for farming and houses. Why is deforestation a cause of climate change?',
    answers: [{
        text: 'Deforestation does not cause climate change',
        correct: false
      },
      {
        text: 'It creates new homes for animals',
        correct: false
      },
      {
        text: 'Trees breathe in CO2, less trees means more CO2 in the atmosphere',
        correct: true
      },
    ]
  },
  {
    question: 'How much waste does every house in the UK produce each year? For example: 1 tonne of waste is about the same as a great white shark!',
    answers: [{
        text: '1 tonne',
        correct: true
      },
      {
        text: 'Half a tonne',
        correct: false
      },
      {
        text: 'A quarter of a tonne',
        correct: false
      },
    ]
  },
  {
    question: 'What can you do to reduce how much you throw away?',
    answers: [{
        text: 'Buy more things',
        correct: false
      },
      {
        text: 'Recycle, repair and reuse items',
        correct: true
      },
      {
        text: 'It does not matter how much you throw away',
        correct: false
      },
    ]
  },
  {
    question: 'Saving electricity is important, as not everyone in the world has access to it. What can you do to save electricity in your house?',
    answers: [{
        text: 'Turn appliances off standby, like the T.V',
        correct: true
      },
      {
        text: 'Leave all the lights on',
        correct: false
      },
      {
        text: 'Use the tumble dryer on a sunny day',
        correct: false
      },
    ]
  },
  {
    question: 'Windfarms are often built offshore beacause _______',
    answers: [{
        text: 'People think they make the sea look nice',
        correct: false
      },
      {
        text: 'People do not want to see them',
        correct: false
      },
      {
        text: 'Wind turbines work best when nothing blocks the wind',
        correct: true
      },
    ]
  },
  {
    question: 'What kind of energy turns wind turbines?',
    answers: [{
        text: 'Potential energy',
        correct: false
      },
      {
        text: 'Kinetic energy (moving energy)',
        correct: true
      },
      {
        text: 'Electrical energy',
        correct: false
      },
    ]
  },
  {
    question: 'Which of these actions would help the environment?',
    answers: [{
        text: 'Dropping litter',
        correct: false
      },
      {
        text: 'Repairing your jeans, instead of buying new ones',
        correct: true
      },
      {
        text: 'NOT recycling',
        correct: false
      },
    ]
  },
  {
    question: 'What is the name given to the network of pylons and power lines that provide electricity?',
    answers: [{
        text: 'The National Grid',
        correct: true
      },
      {
        text: 'The Network',
        correct: false
      },
      {
        text: 'The Solar Grid',
        correct: false
      },
    ]
  },
  {
    question: 'Solar panels absorb light from the Sun. Which type of energy do solar panels need to work?',
    answers: [{
        text: 'Heat energy',
        correct: false
      },
      {
        text: 'Electrical energy',
        correct: false
      },
      {
        text: 'Light energy',
        correct: true
      },
    ]
  },
  {
    question: 'Hydroelectricity is electricity generated by ________',
    answers: [{
        text: 'Wind',
        correct: false
      },
      {
        text: 'The Sun',
        correct: false
      },
      {
        text: 'Flow of water',
        correct: true
      },
    ]
  },
  {
    question: 'What percentage of the world’s renewable electricity is generated by hydroelectricity?',
    answers: [{
        text: '20%',
        correct: false
      },
      {
        text: '40%',
        correct: false
      },
      {
        text: '70%',
        correct: true
      },
    ]
  },
  {
    question: 'Why should batteries NOT go to landfill?',
    answers: [{
        text: 'They can be recharged',
        correct: false
      },
      {
        text: 'They can leak chemicals, which are dangerous if not diposed of properly',
        correct: true
      },
      {
        text: 'They could be reused',
        correct: false
      },
    ]
  },
  {
    question: 'What is the ozone layer?',
    answers: [{
        text: 'A protective layer around the Earth',
        correct: true
      },
      {
        text: 'A paintballing centre',
        correct: false
      },
      {
        text: 'Part of the North Pole',
        correct: false
      },
    ]
  },
  {
    question: 'What can you do to help wild spaces and protect wildlife?',
    answers: [{
        text: 'Walking off designated paths',
        correct: false
      },
      {
        text: 'Building a bee hotel or log pile for bugs',
        correct: true
      },
      {
        text: 'Cutting down wild trees',
        correct: false
      },
    ]
  },
  {
    question: 'Eating sustainably is something we can do to take pressure off our natural resources. How could you do that?',
    answers: [{
        text: 'Eat some vegan and vegetarian meals',
        correct: true
      },
      {
        text: 'Only eat meat',
        correct: false
      },
      {
        text: 'The type of food you eat does not impact the planet',
        correct: false
      },
    ]
  },
  {
    question: 'Global warming is causing the ocean to get warmer, which means ________',
    answers: [{
        text: 'More beach holidays',
        correct: false
      },
      {
        text: 'Coral reefs, in the oceans, getting sick and losing their colour',
        correct: true
      },
      {
        text: "You don't need to cook your fish before you eat it",
        correct: false
      },
    ]
  },
  {
    question: 'Why are electric cars a good way to help reduce global warming?',
    answers: [{
        text: 'They go so fast, the wind keeps the Earth cool',
        correct: false
      },
      {
        text: 'Because they are expensive',
        correct: false
      },
      {
        text: "They don't release greenhouse gases",
        correct: true
      },
    ]
  },
  {
    question: 'Ozone, Nitrous Oxide and Chloroflurocarbons are some of the greenhouse gases. Which other ones are greenhouse gases?',
    answers: [{
        text: 'Water vapor, carbon dioxide and methane',
        correct: true
      },
      {
        text: 'Water vapor',
        correct: false
      },
      {
        text: 'Methane',
        correct: false
      },
    ]
  },
  {
    question: 'Having shorter showers and not leaving the tap running when you brush your teeth is a good way to save _______',
    answers: [{
        text: 'Electricity',
        correct: false
      },
      {
        text: 'Water',
        correct: true
      },
      {
        text: 'Energy',
        correct: false
      },
    ]
  },
];

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const nextLevelButton = document.getElementById("next-level-btn")
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
let level = [easy, medium, hard];
let userCanAnswer = true;
let sound = [correctSound, incorrectSound, levelCompleteSound];
let isPlaying = true;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
})

soundButton.addEventListener("click", () => {
  isPlaying = !isPlaying;
  console.log(isPlaying);

});

homeButton.addEventListener("click", function () {
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
})


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
  shuffledQuestions = level.sort(() => Math.random() - .5);

  nextQuestion();
}

//Shows next question
function nextQuestion() {
  userCanAnswer = true;
  resetQuestion();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  questionCounterText.innerHTML = `${currentQuestionIndex}/${maxQuestions}`
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
  })
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
    if (selectedButton.dataset = correct) {
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
      nextButton.classList.remove("hide")
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
      nextLevelButton.addEventListener("click", nextLevel)
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
  };

  // Generates next level
  function nextLevel() {
    levelCompleteSound.play();
    if (levelScores[0] >= 7 && levelScores[1] >= 7) {
      nextLevelButton.classList.remove("hide");
      nextLevelButton.addEventListener("click", startLevel(hard));
    } else if (levelScores[0] >= 7) {
      startLevel(medium);
    }
  };
};

// End of content from Web Dev Simplified