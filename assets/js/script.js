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

// quiz amended from web dev simplified 

// constants
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const nextLevelButton = document.getElementById("next-level-btn")
const playButton = document.getElementById("play-btn");
const contactButton = document.getElementById("contact-btn");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const questionCounterText = document.getElementById("question-counter");
const answerButtons = document.getElementById("answer-btns");
const scoreText = document.getElementById("score-text");
const maxQuestions = 10;

const easy = [{
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
        text: 'Recyle',
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
        text: 'A gas that traps heat on Earth, preventing it from returning to space',
        correct: true
      },
      {
        text: 'A gas produced by the infamous green housefly',
        correct: false
      },
      {
        text: 'A gas that builds up in a greenhouse after plants have had too many burritos',
        correct: false
      },
    ]
  },
  {
    question: 'Saving water is important so we can make sure we have enough clean water, even in very wet countries! Which of these actions could you do to save water?',
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
    question: 'How would you dispose of a book if you no longer needed it?',
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
    question: 'What have most governments agreed to do to help stop global warming?',
    answers: [{
        text: 'Chop down rainforests',
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
    question: 'Why is it a good idea to turn off lights and other electronics when not using them?',
    answers: [{
        text: 'Because adults say so',
        correct: false
      },
      {
        text: 'Because the lights might get bored',
        correct: false
      },
      {
        text: 'Because the energy used to power lights is often powered by fossil fuels, and we need to save energy',
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
    question: 'Which of the following can help reduce the amount of greenhouse gases released into the atmosphere?',
    answers: [{
        text: 'Using a net to capture carbon dioxide',
        correct: false
      },
      {
        text: 'Flying to the beach with friends in seperate planes',
        correct: false
      },
      {
        text: 'Carpooling (sharing car journeys with other people)',
        correct: true
      },
    ]
  },
  {
    question: 'A warmer climate can affect our planet in lots of ways such as more rain, shrinking sea ice and ________',
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
    question: 'How much plastic enters the ocean each year? To give you an idea, 1 tonne of waste is about the same as a great white shark!',
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
    question: 'Deforestation is the clearing of forest for use such as farming and houses. Why is deforestation a cause of climate change?',
    answers: [{
        text: 'Deforestation does not cause climate change',
        correct: false
      },
      {
        text: 'It creates new homes for animals',
        correct: false
      },
      {
        text: 'Trees breathe in carbon dioxide and breathe out oxygen. With less trees means more carbon dioxde, a greenhouse gas, in the atmosphere',
        correct: true
      },
    ]
  },
  {
    question: 'We live in a ‘throwaway culture‘, where many of our things are not built to last. How much waste does every house in the UK produce each year? To give you an idea, 1 tonne of waste is about the same as a great white shark!',
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
        text: 'Wind turbines work best with no obstructions that block the wind',
        correct: true
      },
    ]
  },
  {
    question: 'What kind of energy turns wind turbines in wind farms?',
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
        text: 'Not recycling',
        correct: false
      },
    ]
  },
  {
    question: 'What is the name given to the network of pylons and power lines that provide electricity to buildings?',
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
    question: 'Why should batteries not go to landfill?',
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
        text: 'A protective layer aroun the Earth',
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
    question: 'All over the world wild places are in trouble but there are things you can do to help protect them. Which one do you think is right?',
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
    question: 'Eating sustainably is something we can do to take pressure off natural resources such as ecosystems and the ocean. How could you do that?',
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
        text: 'Coral reefs, in the oceans, gettinh sick and losing their colour',
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
        text: 'They go so fast that the wind they create helps to keep Earth cool',
        correct: false
      },
      {
        text: 'Electric cars are super cool. They are SO cool, they actually cool the Earth down',
        correct: false
      },
      {
        text: "They don't release greenhouse gases into the atmosphere",
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

// let
let shuffledQuestions;
let currentQuestion;
let currentQuestionIndex;
let score;
let level = [easy, medium, hard];

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
})

function startGame() {
  console.log("Game started");

  startButton.classList.add("hide");
  playButton.classList.add("hide");
  contactButton.classList.add("hide");
  greeting.classList.add("hide");
  quizContainer.classList.remove("hide");
  startLevel(easy);
}

function startLevel(level) {
  currentQuestionIndex = 0;
  score = 0;

  console.log("level 1")
  shuffledQuestions = level.sort(() => Math.random() - .5);

  nextQuestion();
}


function nextQuestion() {
  resetQuestion();
  showQuestion(shuffledQuestions[currentQuestionIndex]);

  questionCounterText.innerHTML = `${currentQuestionIndex}/${maxQuestions}`
}

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

function resetQuestion() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  if (selectedButton.dataset = correct) {
    score++;
    console.log("1 point");
  }

  if (currentQuestionIndex === maxQuestions) {
    endLevel();
  } else {
    nextButton.classList.remove("hide")
  }

}


function endLevel() {
  answerButtons.classList.add("hide");
  questionContainer.classList.add("hide");
  scoreText.classList.remove("hide");


  if (score >= 7) {
    scoreText.innerHTML = `${score}/${maxQuestions}`;
    console.log("next level")
    nextLevelButton.classList.remove("hide");
    nextLevelButton.addEventListener("click", nextLevel);


  } else {
    scoreText.innerHTML = `${score}/${maxQuestions}`
    startButton.classList.remove("hide");
    startButton.innerText = "Try again";
    startButton.addEventListener("click", startLevel(easy));
  }
}

function nextLevel () {
  console.log("level 2");
  startLevel(medium);
}