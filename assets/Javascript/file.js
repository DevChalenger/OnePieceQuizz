Quizz();
function Quizz() {
  const start = document.getElementById("btn-start");
  const questionBlock = document.getElementById("container_question");
  const questionType = document.getElementById("question");
  const answersButton = document.getElementById("container_answer");
  const nextButton = document.getElementById("btn-next");
  const startButton = document.getElementById("btn-start");
  const answerTrueOrFalse = document.getElementById("answerTrueOrFalse");
  const onePieceOpening = document.getElementById("audio");
  const quizzEnd = document.getElementById("result");
  const questionList = listQuestion();

  console.log(questionList.length / 10);
  quizzEnd.classList.add("hide");
  answerTrueOrFalse.classList.add("hide");
  startButton.addEventListener("click", function () {
    onePieceOpening.play();
  });
  let switchQuestion, currentQuestion;
  start.addEventListener("click", startQuizz);
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion();
  });
  function startQuizz() {
    start.classList.add("hide");
    switchQuestion = questionList.sort(() => {
      Math.random() - questionList.length / 10;
    });
    currentQuestion = 0;
    questionBlock.classList.remove("hide");
    quizzEnd.classList.add("hide");
    nextQuestion();
  }
  function resetAnswer() {
    nextButton.classList.add("hide");
    while (answersButton.firstChild) {
      answersButton.removeChild(answersButton.firstChild);
    }
  }
  function nextQuestion() {
    resetAnswer();
    answerTrueOrFalse.classList.add("hide");
    showQuestion(switchQuestion[currentQuestion]);
  }
  function showQuestion(question) {
    questionType.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;

      if (answer.img) {
        let addBerry = document.createElement("img");
        button.appendChild(addBerry);
        addBerry.src = answer.img;
      }
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answersButton.appendChild(button);
    });
  }
  function selectAnswer(event) {
    const selectButton = event.target;
    const correct = selectButton.dataset.correct;
    setStatus(answersButton, correct);

    if (switchQuestion.length > currentQuestion + 1) {
      nextButton.classList.remove("hide");
      quizzEnd.classList.add("hide");
    } else {
      startButton.innerText = "Recommencer le Quizz";
      startButton.classList.remove("hide");
      nextButton.classList.add("hide");
      quizzEnd.classList.remove("hide");
    }
  }
  function setStatus(element, correct) {
    clearStatus(element);
    if (correct) {
      element.classList.add("correct");
      answerTrueOrFalse.classList.remove("hide");
      answerTrueOrFalse.textContent = "Bonne réponse";
    } else {
      element.classList.add("wrong");
      answerTrueOrFalse.classList.remove("hide");
      answerTrueOrFalse.textContent = "Mauvaise réponse";
    }
  }
  function clearStatus(element) {
    element.classList.remove("correct");
  }
}
