// player selects difficulty setting
$(document).ready(function() {

  runGame();

  function runGame() {
    let correctQuestions = 0;
    let totalQuestions = 0;
    let questionsAsked = [];
    let questionsArr;
    let questionCap = 5;

    $("#start-game-panel").show();
    $("#question-panel").hide();
    $("#correct-panel").hide();
    $("#wrong-panel").hide();
    $("#final-panel").hide();

    let randNum;

    $(".difficulty-button").on("click", function (e) {

      function setFirstQuestion() {
        randNum = Math.floor(Math.random() * questionsArr.length);
        setQuestion(questionsArr[randNum]);
        totalQuestions++;
        questionsAsked.push(questionsArr[randNum].id);
        $("#question-number").html(totalQuestions);
        $("#start-game-panel").hide();
        return $("#question-panel").show();
      }

      if (e.target.id === "easy-button") {
        questionsArr = easyQuestions;
        setFirstQuestion();

      } else if (e.target.id === "medium-button") {
        questionsArr = mediumQuestions;
        setFirstQuestion();

      } else if (e.target.id === "hard-button") {
        questionsArr = hardQuestions;
        setFirstQuestion();
      }
    });

    $(".response-button").on("click", function() {

      if (questionsAsked.length < questionCap) {
        totalQuestions++;
        $("#question-number").html(totalQuestions);


        if ($(this).text() === questionsArr[randNum].answer) {
          // if the user gets the question right
          $("#question-panel").hide();
          $("#correct-panel").show();
          correctQuestions++;
          console.log(correctQuestions);
          questionsAsked.push(questionsArr[randNum].id);

          // set a new random number that isn't in array of questions thus asked
          let running = true;
          while (running) {
              randNum = Math.floor(Math.random()*questionsArr.length);
              if (questionsAsked.indexOf(randNum) === -1) {
                  setQuestion(questionsArr[randNum]);
                  running = false;
              }
          }

        } else {
          // if the user gets the question wrong
          $("#question-panel").hide();
          $("#wrong-panel").show();
          questionsAsked.push(questionsArr[randNum].id);

          let running = true;
          while (running) {
              randNum = Math.floor(Math.random()*questionsArr.length);
              if (questionsAsked.indexOf(randNum) === -1) {
                  setQuestion(questionsArr[randNum]);
                  running = false;
              }
          }
        }

      } else {

        $("#numerator").html(correctQuestions);
        $("#denominator").html(questionCap);
        let percentRight = Math.round((correctQuestions/questionCap) * 100);
        $("#percentage-correct").html(percentRight);
        $(".difficult-button").off();
        $(".response-button").off();
        $("#question-panel").hide();
        $("#final-panel").show();

      }
    });
  }

  $("#restart-button").on('click', function() {
      $("#final-panel").hide();
      runGame();
  });

  $(".continue-button").on("click", function(e) {
      // hides current window and shows question panel with brand new question
      $("#question-panel").show();
      $("#correct-panel").hide();
      $("#wrong-panel").hide();
  });

  function setQuestion(obj) {
    $("#question-text").html(obj.question);

    for (i=0; i < obj.responses.length; i++) {
        let buttonNumber = (i + 1).toString();
        $("#" + buttonNumber).html(obj.responses[i]);
    }
  }
});


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
