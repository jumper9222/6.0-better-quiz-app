const question = document.getElementById("question")
const input = document.getElementById("answer")
const submit = document.getElementById("submit")

const questions = [
  {
  question: "What is the capital of Australia?",
  answer: "canberra"
  }, 
  {
  question: "What is the largest mammal?",
  answer: "blue whale"
  },
  {
  question: "What is the capital of France?",
  answer: "paris"
  },
  {
  question: "Who wrote Romeo and Juliet?",
  answer: "william shakespeare"
  },
  {
  question: "In which year did the first manned moon landing occur?",
  answer: "1969"
  }
] 

let questionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = questions[questionIndex];
  let displayQuestion = `<h2>${currentQuestion.question}</h2>`;
  document.getElementById("questionContainer").innerHTML = displayQuestion
};

function nextQuestion() {
  const currentQuestion = questions[questionIndex];
  const userAnswer = input.value.toLowerCase().trim()
  const correctAnswer = userAnswer === currentQuestion.answer

  if (!userAnswer) {
    alert(`Please input an answer!`);
    return
  };

  if (correctAnswer) {
    score++;
    input.value = "";
  } else {
    input.value = "";    
  }

  if (questionIndex < questions.length-1) {
    questionIndex++;
    displayQuestion()
  } else {
    document.getElementById("result").innerHTML = `<h2>Score: ${score}/${questions.length}</h2>`
    document.getElementById("submit").style.display = "none"
  }
}

displayQuestion()