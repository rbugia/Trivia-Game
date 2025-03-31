const questions = ["What planet is known as the 'Red Planet'?", "Who painted the Mona Lisa?"];

const choicesArray = [
["Earth", "Mars", "Jupiter", "Saturn"], ["Leonardo Da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michaelangelo"]
];

const correctAnswers = ["Mars", "Leonardo Da Vinci"];

let currentQuestionIndex = 0;
let score = 0;


function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.disabled = false;
      document.getElementById('result').textContent = "";
    }
 } else {
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}!`;
    document.getElementById('question').innerHTML = "";
    document.getElementById(`choice${i + 1}`).innerHTML = "";
    }
  }


function checkAnswer(button) { 
  if (button.textContent === correctAnswers[currentQuestionIndex]) {
    document.getElementById('result').textContent = "Correct!";
    score++;
  } else {
    document.getElementById('result').textContent = "Incorrect!";
  }
  for (let i = 0; i < 4; i++) {
     const btn = document.getElementById(`choice${i + 1}`).disabled = true;
  }
  currentQuestionIndex++;
  setTimeout(displayQuestion, 1000); // Move to next question after 1 second
}

displayQuestion();
