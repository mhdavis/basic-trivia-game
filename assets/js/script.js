// player selects difficulty setting
$(document).ready(function() {

  runGame();

  function runGame() {
    //-------------------------------------------------------------------

    // SET UP VARIABLES
    let correctQuestions = 0;
    let totalQuestions = 0;
    let questionsAsked = [];
    let questionsArr;
    let questionCap = 5;
    let randNum;

    $("#start-game-panel").show();
    $("#question-panel").hide();
    $("#correct-panel").hide();
    $("#wrong-panel").hide();
    $("#final-panel").hide();

    //-------------------------------------------------------------------

    //EVENT HANDLERS
    $(".difficulty-button").on("click", function(e) {

      if (e.target.id === "easy-button") {
        questionsArr = easyQuestions;
        randNum = Math.floor(Math.random() * questionsArr.length);
        setFirstQuestion(questionsArr, questionsAsked, randNum);

      } else if (e.target.id === "medium-button") {
        questionsArr = mediumQuestions;
        randNum = Math.floor(Math.random() * questionsArr.length);
        setFirstQuestion(questionsArr, questionsAsked, randNum);

      } else if (e.target.id === "hard-button") {
        questionsArr = hardQuestions;
        randNum = Math.floor(Math.random() * questionsArr.length);
        setFirstQuestion(questionsArr, questionsAsked, randNum);
      }
    });

    $(".response-button").on("click", function() {
      let userGuess = $(this).text();
      let currentQuestion = questionsArr[randNum];
      let currentQuestionResponses = currentQuestion.responses;
      let currentQuestionID = currentQuestion.id;
      let currentQuestionAnswer = currentQuestion.answer;

      if (questionsAsked.length < questionCap) {

        totalQuestions++;
        $("#question-number").html(totalQuestions);
        checkQuestion(currentQuestionAnswer, currentQuestionID, userGuess, questionsAsked);

        function gen (num) {
          if (questionsAsked.indexOf(num) === -1) {
            return num;
          } else {
            return gen(num);
          }
        }

        // while the question hasn't already been asked
        console.log("Questioned Asked: " +  questionsAsked);

        setQuestion(questionsArr[randNum]);

      } else {

        if (userGuess === currentQuestionAnswer) {
          correctQuestions++;
        }

        $("#numerator").html(correctQuestions);
        $("#denominator").html(questionCap);
        let percentRight = Math.round((correctQuestions / questionCap) * 100);
        $("#percentage-correct").html(percentRight);
        $(".difficult-button").off();
        $(".response-button").off();
        $("#question-panel").hide();
        return $("#final-panel").show();

      }
    });

    $("#restart-button").on('click', function() {
      $("#final-panel").hide();
      runGame();
    });

    $(".continue-button").on("click", function() {
      // hides current window and shows question panel with brand new question
      $("#question-panel").show();
      $("#correct-panel").hide();
      $("#wrong-panel").hide();
    });

    //-------------------------------------------------------------------

    //DEFINE FUNCTIONS

    function setQuestion(obj) {

      $("#question-text").html(obj.question);
      for (i = 0; i < obj.responses.length; i++) {
        let buttonNumber = (i + 1).toString();
        $("#" + buttonNumber).html(obj.responses[i]);
      } // end for loop
    } // end setQuestion function

    function setFirstQuestion(arr1, arr2, num) {
      let firstQuestion = arr1[num];
      setQuestion(firstQuestion);
      totalQuestions++;
      arr2.push(firstQuestion);
      $("#question-number").html(totalQuestions);
      $("#start-game-panel").hide();
      return $("#question-panel").show();
    }

    function checkQuestion(answer, id, guess, arr) {

      if (guess === answer) {
        // if the user gets the question right
        $("#question-panel").hide();
        $("#correct-panel").show();
        correctQuestions++;
        return arr.push(id);

      } else {

        $("#question-panel").hide();
        $("#wrong-panel").show();
        return arr.push(id);

      } // end else statement
    } // end checkQuestion function


    //arr1  = questionsArr
    //num = random number
    //arr2 = asked questions
    function generateNewQuestion(arr1, arr2, num) {
      let randomQuestion = arr1[num].id;
      let running = true;
      while (running) {
        num = Math.floor(Math.random() * arr1.length);
        console.log("generated values: " + num);
        if (arr2.indexOf(num) === -1) {
          console.log("Final value: " + num);
          running = false;
          return setQuestion(randomQuestion);
        } // end if statement;
      } // end while loop
    } // end generateNewQuestion function

    //-------------------------------------------------------------------

  } // end runGame function
}); // end document.ready()


const easyQuestions = [
  {
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
  },
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
    responses: ["Miles Morales", "Ben Riley", "The Flash", "Miguel O'Hara"],
    answer: "Batman"
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
  },
];
