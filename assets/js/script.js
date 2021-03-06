// player selects difficulty setting
$(document).ready(function() {

  runGame();

//--------------------------
//MAIN RUNGAME FUNCTION
//--------------------------

  function runGame() {

    //--------------------------
    //INTIALIZE VARIABLES
    //--------------------------

    let cap = 5;
    let correctQuestions = 0;
    let totalQuestions = 0;
    let questionsArr;
    let questionsArrTotal = 10;
    let questionNumbersArr = randomIndicesArr(cap, questionsArrTotal);
    let questionIndex = 0;

    let timeAmount = 60;
    let intervalId;

    // Sets up initial configuration of panels
    $("#start-game-panel").show();
    $("#question-panel").hide();
    $("#correct-panel").hide();
    $("#wrong-panel").hide();
    $("#final-panel").hide();

    //--------------------------
    //EVENT HANDLERS
    //--------------------------

    $(".difficulty-button").on("click", function(e) {

      if (e.target.id === "easy-button") {
        questionsArr = easyQuestions;

      } else if (e.target.id === "medium-button") {
        questionsArr = mediumQuestions;

      } else if (e.target.id === "hard-button") {
        questionsArr = hardQuestions;
      }

      // Loads up the first question into the question panel
      let difRandomQuestion = questionsArr[questionNumbersArr[questionIndex]];
      setQuestion(difRandomQuestion);

      // displays the question number
      totalQuestions++;
      $("#question-number").html(totalQuestions);

      // displays the question panel
      $("#start-game-panel").hide();
      $("#question-panel").show();

      // starts the timer
      $(".timer").html(timeConvertor(timeAmount));
      runTimer();
    });

    $(".response-button").on("click", function() {

      let userGuess = $(this).text();
      let currentQuestion = questionsArr[questionNumbersArr[questionIndex]];
      let cQAnswer = currentQuestion.answer;

      if (timeAmount === 0 || questionIndex + 1 === cap) {

        if (userGuess === cQAnswer) {
          correctQuestions++;
        }

        displayFinalTotals();
        reset();

      } else {

        totalQuestions++;
        $("#question-number").html(totalQuestions);
        checkQuestion(cQAnswer, userGuess);

        questionIndex++;
        let respRandomQuestion = questionsArr[questionNumbersArr[questionIndex]];
        setQuestion(respRandomQuestion);

      }
    });

    $("#restart-button").on('click', function() {
      $("#final-panel").hide();
      stopTimer();
      reset();
      runGame();
    });

    $(".continue-button").on("click", function() {
      // hides current window and shows question panel with brand new question
      $("#question-panel").show();
      $("#correct-panel").hide();
      $("#wrong-panel").hide();
    });

    //--------------------------
    //TIMING RELATED FUNCTIONS
    //--------------------------

    function runTimer() {
      intervalId = setInterval(decrementTimer, 1000);
    }

    function decrementTimer() {
      timeAmount--;
      $(".timer").html(timeConvertor(timeAmount));

      if (timeAmount === 0) {
        stopTimer();
        displayFinalTotals();
      }
    }

    function stopTimer() {
      clearInterval(intervalId);
    }

    function timeConvertor(t) {

      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }

      return minutes + ":" + seconds;
    }

    //--------------------------
    //GENERAL FUNCTIONS
    //--------------------------

    function displayFinalTotals() {
      $("#numerator").html(correctQuestions);
      $("#denominator").html(cap);
      let percentRight = Math.round((correctQuestions / cap) * 100);
      $("#percentage-correct").html(percentRight);
      $("#question-panel").hide();
      $("#final-panel").show();
    }

    /* Reset function
    turns off button event handlers
    */
    function reset() {
      $(".difficulty-button").off();
      $(".response-button").off();
      return;
    }

    /* RandomIndicesArr Function
    generates an array of individually unique
    "max" indices, each from 1 to lng
    */
    function randomIndicesArr(max, lng) {

      let array = [];
      while (array.length < max) {
        let rando = Math.floor(Math.random() * lng);
        if (array.indexOf(rando) === -1) {
          array.push(rando);
        }
      }
      return array;
    }

    /* setQuestion function
    adds the values for the question and answers
    to the question panel to be displayed for
    the user
    */
    function setQuestion(obj) {
      $("#question-text").html(obj.question);
      for (i = 0; i < obj.responses.length; i++) {
        let buttonNumber = (i + 1).toString();
        $("#" + buttonNumber).html(obj.responses[i]);
      } // end for loop
    } // end setQuestion function


    /* checkQuestion function
      checks if the answer given is equivalent
      to the question answer
    */
    function checkQuestion(answer, guess) {

      if (guess === answer) {
        // if the user gets the question right
        $("#question-panel").hide();
        $("#correct-panel").show();
        correctQuestions++;

      } else {

        $("#question-panel").hide();
        $("#wrong-panel").show();

      } // end else statement
    } // end checkQuestion function

  } // end runGame function
}); // end document.ready()

//--------------------------
//ARRAY OF QUESTIONS OBJECTS
//--------------------------

const easyQuestions = [{
    id: 1,
    question: "Which Superhero wears a pointed cowl?",
    responses: ["Batman", "Superman", "The Flash", "Aquaman"],
    answer: "Batman"
  },
  {
    id: 2,
    question: "Which Superhero commands the seas and can speak with fish?",
    responses: ["Batman", "Superman", "The Flash", "Aquaman"],
    answer: "Aquaman"
  },
  {
    id: 3,
    question: "Which Superhero is the fastest man alive?",
    responses: ["Batman", "Superman", "The Flash", "Aquaman"],
    answer: "The Flash"
  },
  {
    id: 4,
    question: "Which Superhero can leap tall building in a single bound?",
    responses: ["Batman", "Superman", "The Flash", "Aquaman"],
    answer: "Superman"
  },
  {
    id: 5,
    question: "Which Superheroine fights with a lasso and bracers?",
    responses: ["Black Canary", "Hawk Girl", "Wonder Woman", "Supergirl"],
    answer: "Wonder Woman"
  },
  {
    id: 6,
    question: "Which Superheroine fights with a mace and has wings?",
    responses: ["Black Canary", "Hawk Girl", "Wonder Woman", "Supergirl"],
    answer: "Hawk Girl"
  },
  {
    id: 7,
    question: "Which Superheroine fights with sonic screetches?",
    responses: ["Black Canary", "Hawk Girl", "Wonder Woman", "Supergirl"],
    answer: "Black Canary"
  },
  {
    id: 8,
    question: "Which Superheroine can fly and is Superman's cousin?",
    responses: ["Black Canary", "Hawk Girl", "Wonder Woman", "Supergirl"],
    answer: "Supergirl"
  },
  {
    id: 9,
    question: "Which Superhero villian dresses as a clown?",
    responses: ["Lex Luthor", "The Joker", "Gorilla Grod", "Ares"],
    answer: "The Joker"
  },
  {
    id: 10,
    question: "Which Superhero villian is bald?",
    responses: ["Lex Luthor", "The Joker", "Gorilla Grod", "Ares"],
    answer: "Lex Luthor"
  }
];

const mediumQuestions = [{
    id: 1,
    question: "Which Superhero is NOT an Avenger?",
    responses: ["Captain America", "Ironman", "Thor", "Cyclops"],
    answer: "Cyclops"
  },
  {
    id: 2,
    question: "Which Superhero is NOT an X-Men?",
    responses: ["Wolverine", "Beast", "Thor", "Cyclops"],
    answer: "Thor"
  },
  {
    id: 3,
    question: "Which Superhero is NOT a member of the Fantastic Four?",
    responses: ["Susan Storm", "Reed Richards", "Peter Parker", "Ben Grimm"],
    answer: "Peter Parker"
  },
  {
    id: 4,
    question: "Which Superhero is Barry Allen?",
    responses: ["Batman", "Superman", "The Flash", "Aquaman"],
    answer: "The Flash"
  },
  {
    id: 5,
    question: "Which Superhero is Arthur Curry?",
    responses: ["Batman", "Superman", "The Flash", "Aquaman"],
    answer: "Aquaman"
  },
  {
    id: 6,
    question: "Which Superhero is Dianna Prince?",
    responses: ["Black Canary", "Hawk Girl", "Wonder Woman", "Supergirl"],
    answer: "Wonder Woman"
  },
  {
    id: 7,
    question: "Which Superhero is Kara Kent?",
    responses: ["Black Canary", "Hawk Girl", "Wonder Woman", "Supergirl"],
    answer: "Supergirl"
  },
  {
    id: 8,
    question: "Which of these heroes lives in the DC Universe?",
    responses: ["Black Canary", "Spider Woman", "Wonder Woman", "Supergirl"],
    answer: "Spider Woman"
  },
  {
    id: 9,
    question: "Which of these heroes lives in the Marvel Universe?",
    responses: ["Ironman", "Superman", "The Flash", "Aquaman"],
    answer: "Ironman"
  },
  {
    id: 10,
    question: "Which of these heroes lives in the Marvel Universe?",
    responses: ["Batman", "Superman", "Wolverine", "Aquaman"],
    answer: "Wolverine"
  }
];

const hardQuestions = [{
    id: 1,
    question: "Which individual is NOT a Green Lantern?",
    responses: ["Hal Jordon", "Kyle Rayner", "Atrocitus", "Abin Sur"],
    answer: "Atrocitus"
  },
  {
    id: 2,
    question: "What is the name of Wonder Woman's home island?",
    responses: ["Gotham", "Ithaca", "Themyscira", "Atlantis"],
    answer: "Themyscira"
  },
  {
    id: 3,
    question: "Where does the Flash get his powers from?",
    responses: ["The Power Lightening", "The Speed Force", "The Zoom Force", "Quantum Speed"],
    answer: "The Speed Force"
  },
  {
    id: 4,
    question: "Which Lantern Corps oath contains 'Beware your fears made into light'?",
    responses: ["Green Lantern Corps", "Red Lantern Corps", "Blue Lantern Corps", "Sinestro Corps"],
    answer: "Sinestro Corps"
  },
  {
    id: 5,
    question: "Which of the following individuals have NOT dawned the Spiderman mantle?",
    responses: ["Miles Morales", "Ben Riley", "Bobby Drake", "Miguel O'Hara"],
    answer: "Bobby Drake"
  },
  {
    id: 6,
    question: "Wolverine has been a part of the following groups, EXCEPT...?",
    responses: ["X-Force", "Avengers", "Alpha Flight", "Brotherhood of Mutants"],
    answer: "Brotherhood of Mutants"
  },
  {
    id: 7,
    question: "Which Superhero is NOT in the core Justice League Roster?",
    responses: ["Cyborg", "Green Arrow", "Martian Manhunter", "Hawk Girl"],
    answer: "Green Arrow"
  },
  {
    id: 8,
    question: "Which of the following Superheroes is NOT in the Defenders?",
    responses: ["Jessica Jones", "Luke Cage", "Doctor Strange", "Iron Fist"],
    answer: "Doctor Strange"
  },
  {
    id: 9,
    question: "Daredevil is a devout ______ ?",
    responses: ["Christian", "Buddist", "Jew", "Catholic"],
    answer: "Batman"
  },
  {
    id: 10,
    question: "Hydro-Man is a villian to which Superhero?",
    responses: ["Spiderman", "Captain America", "The Human Torch", "Ironman"],
    answer: "Spiderman"
  }
];
