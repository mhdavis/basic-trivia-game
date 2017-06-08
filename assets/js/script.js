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
  $(".difficulty-button").on("click", function (e) {

    if (e.target.id === "easy-button") {
      questionsArr = easyQuestions;
      randNum = Math.floor(Math.random() * questionsArr.length);
      setFirstQuestion(questionsArr, randNum);

    } else if (e.target.id === "medium-button") {
      questionsArr = mediumQuestions;
      randNum = Math.floor(Math.random() * questionsArr.length);
      setFirstQuestion(questionsArr, randNum);

    } else if (e.target.id === "hard-button") {
      questionsArr = hardQuestions;
      randNum = Math.floor(Math.random() * questionsArr.length);
      setFirstQuestion(questionsArr, randNum);
    }
  });

  $(".response-button").on("click", function() {
      let userGuess = $(this).text();
      let currentQuestion = questionsArr[randNum];
      let currentQuestionID = currentQuestion.id;
      let currentQuestionAnswer = currentQuestion.answer;
      checkQuestion(currentQuestionAnswer, currentQuestionID, userGuess);
      generateNewQuestion(questionsArr, questionsAsked, randNum);
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

      for (i=0; i < obj.responses.length; i++) {
          let buttonNumber = (i + 1).toString();
          $("#" + buttonNumber).html(obj.responses[i]);
      } // end for loop
    } // end setQuestion function

    function setFirstQuestion(arr, num) {
      let firstQuestion = arr[num];
      setQuestion(firstQuestion);
      totalQuestions++;
      questionsAsked.push(firstQuestion.id);
      $("#question-number").html(totalQuestions);
      $("#start-game-panel").hide();
      return $("#question-panel").show();
    }

    function checkQuestion(answer, id, guess) {

      if (questionsAsked.length < questionCap) {
        totalQuestions++;
        $("#question-number").html(totalQuestions);

        if (guess === answer) {
          // if the user gets the question right
          $("#question-panel").hide();
          $("#correct-panel").show();
          correctQuestions++;
          return questionsAsked.push(id);

        } else {

          $("#question-panel").hide();
          $("#wrong-panel").show();
          return questionsAsked.push(id);

        } // end else statement
      } else {

        if (guess === answer) {
          correctQuestions++;
        }

        $("#numerator").html(correctQuestions);
        $("#denominator").html(questionCap);
        let percentRight = Math.round((correctQuestions/questionCap) * 100);
        $("#percentage-correct").html(percentRight);
        $(".difficult-button").off();
        $(".response-button").off();
        $("#question-panel").hide();
        return $("#final-panel").show();

      } // end end statement
    } // end checkQuestion function

    function generateNewQuestion(arr1, arr2, num) {
      let running = true;
      while (running) {
          num = Math.floor(Math.random()*arr1.length);
          if (arr2.indexOf(num) === -1) {
              setQuestion(arr1[num]);
              running = false;
          } // end if statement;
      } // end while loop
    } // end generateNewQuestion function

    //-------------------------------------------------------------------

} // end runGame function
}); // end document.ready()


const easyQuestions = [
  {
    "id": 1,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 2,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 3,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 4,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 5,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
];

const mediumQuestions = [
  {
    "id": 1,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 2,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 3,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 4,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 5,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
];

const hardQuestions = [
  {
    "id": 1,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 2,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 3,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 4,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
  {
    "id": 5,
    "question": "Which Superhero wears a pointed cowl?",
    "responses": ["Batman", "Superman", "The Flash", "Aquaman"],
    "answer": "Batman"
  },
];
