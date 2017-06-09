$(document).ready(function() {

  function runGame() {

    let cap = 5;
    let correctQuestions = 0;
    let totalQuestions = 0;
    let questionsArr;
    let questionsArrTotal = 10;
    let questionNumbersArr = generateArray(questionsArrTotal);
    let questionIndex = 0;

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

      } else if (e.target.id === "medium-button") {
        questionsArr = mediumQuestions;

      } else if (e.target.id === "hard-button") {
        questionsArr = hardQuestions;
      }

      questionNumbersArr = shuffle(questionNumbersArr);

      let difRandomQuestion = questionArr[questionNumbersArr[questionIndex]];

      setQuestion(difRandomQuestion);
    });

    $(".response-button").on("click", function() {
      let userGuess = $(this).text();
      let currentQuestion = questionArr[questionNumbersArr[questionIndex]];
      let cQID = currentQuestion.id;
      let cQAnswer = currentQuestion.answer;

      if (!questionIndex + 1 === cap) {

        totalQuestions++;
        $("#question-number").html(totalQuestions);
        checkQuestion(cQAnswer, cqID, userGuess);

        questionIndex++;
        let respRandomQuestion = questionArr[questionNumbersArr[questionIndex]];
        setQuestion(respRandomQuestion);

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

    function generateArray(num) {
      let product = [];
      for (i=1; i < num + 1; i++) {
        product.push(i);
      }
      return product;
    }

    function shuffle(array) {
      var m = array.length, t, i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    function setQuestion(obj) {
      $("#question-text").html(obj.question);
      for (i = 0; i < obj.responses.length; i++) {
        let buttonNumber = (i + 1).toString();
        $("#" + buttonNumber).html(obj.responses[i]);
      } // end for loop
    } // end setQuestion function


    function checkQuestion(answer, id, guess) {

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

  }
});
