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


// player selects difficulty setting
$(document).ready(function() {

  runGame();

  function runGame() {
    let correctQuestions = 0;
    let totalQuestions = 0;
    let questionsAsked = [];
    let questionsArr;

    $("#start-game-panel").show();
    $("#question-panel").hide();
    $("#correct-panel").hide();
    $("#wrong-panel").hide();
    $("#final-panel").hide();


    $(".difficulty-button").on("click", function (e) {

      function prepFirstQuestion(arr) {
        let randNum = Math.floor(Math.random() * arr.length);
        setQuestion(arr[randNum]);
        questionsAsked.push(arr[randNum].id);
        $("#start-game-panel").hide();
        $("#question-panel").show();
      }

      if (e.target.id === "easy-button") {
        questionsArr = easyQuestions;
        prepFirstQuestion(questionsArr);

      } else if (e.target.id === "medium-button") {
        questionsArr = mediumQuestions;
        prepFirstQuestion(questionsArr);

      } else if (e.target.id === "hard-button") {
        questionsArr = hardQuestions;
        prepFirstQuestion(questionsArr);

      }
    });

    $(".response-button").on("click", function(ev) {
      // clicks a response button
      // if the response button
      if (questionsAsked.length < 5) {
        if (ev.target.text === questionArr[randNum].answer) {
          // if the user gets the question right
          $("#question-panel").hide();
          $("#correct-panel").show();
          correctQuestions++;
          totalQuestions++;
          questionsAsked.push(questionsArr[randNum].id);

          let running = true;
          while (running) {
              randNum = Math.floor(Math.random()*questionsArr.length);
              if (questionsAsked.indexOf(randNum) === -1) {
                  setQuestion(questionArr[randNum]);
                  running = false;
              }
          }

        } else {
          // if the user gets the question wrong
          $("#question-panel").hide();
          $("#wrong-panel").show();
          totalQuestions++;
          questionsAsked.push(questionsArr[randNum].id);

          let running = true;
          while (running) {
              randNum = Math.floor(Math.random()*questionsArr.length);
              if (questionsAsked.indexOf(randNum) === -1) {
                  setQuestion(questionArr[randNum]);
                  running = false;
              }
          }

        }
      } else if (questionAsked.length === 5) {
        $("#numerator").html(correctQuestions);
        $("#denominator").html(totalQuestions);
        let percentRight = Math.round((correctQuestions/totalQuestions) * 100);
        $("#percentage-correct").html(percentRight);
        $(".difficult-button").off();
        $(".response-button").off();
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
        $("#" + i).html(obj.responses[i]);
    }
  }
});
