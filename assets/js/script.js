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

function runGame() {
  let correctQuestions = 0;
  let totalQuestions = 0;
  let questionsAsked = [];
  let questionArr;

  $("#start-game-panel").show();
  $("#question-panel").hide();
  $("#correct-panel").hide();
  $("#wrong-panel").hide();


  $(".difficulty-button").on("click", function (e) {

    if (e.target.id === "easy-button") {
      questionArr = easyQuestions;
      $("#start-game-panel").hide();
      $("#question-panel").show();
    } else if (e.target.id === "medium-button") {
      questionArr = mediumQuestions;
    } else if (e.target.id === "hard-button") {
      questionArr = hardQuestions;
    }

    // FIGURE OUT WHERE TO PUT THIS
    if (totalQuestions === 5) {
      return //stop game;
    }
  });

  let randNum = Math.floor(Math.random()*questionsArr.length);
  setQuestion(questionArr[randNum]);

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
        randNum = Math.floor(Math.random()*questionsArr.length);
        setQuestion(questionArr[randNum]);
      } else {
        // if the user gets the question wrong
        $("#question-panel").hide();
        $("#wrong-panel").show();
        totalQuestions++;
        questionsAsked.push(questionsArr[randNum].id);
        setQuestion(questionArr[randNum]);
      }
    } else if (questionAsked.length === 5) {
      // after player finishes answering question display correct/wrong panel
      // then display final statistics
      // then offer refresh button
      // reset game.

    }
  });

$(".continue-button").on("click", function(e) {
    // hides current window and shows question panel with brand new question
});

function setQuestion(obj) {
  $("#question-text").html(obj.question);

  for (i=0; i < obj.responses.length; i++) {
      $("#" + string(i)).html(obj.responses[i]);
  }
}

}
