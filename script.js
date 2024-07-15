function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer) {
      document.getElementById("feedback").textContent = "correct!";
    } else {
      document.getElementById("feedback").textContent = "incorrect";
    }
  }
  
  document.getElementById("submit-answer").addEventListener("click", checkAnswer);