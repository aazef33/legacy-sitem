
document.getElementById("riddleForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const answers = {
    riddle1: "truth",
    riddle2: "curse",
    riddle3: "fear"
  };
  const userAnswers = {
    riddle1: document.querySelector('input[name="riddle1"]:checked')?.value,
    riddle2: document.querySelector('input[name="riddle2"]:checked')?.value,
    riddle3: document.querySelector('input[name="riddle3"]:checked')?.value
  };
  if (
    userAnswers.riddle1 === answers.riddle1 &&
    userAnswers.riddle2 === answers.riddle2 &&
    userAnswers.riddle3 === answers.riddle3
  ) {
    document.querySelector(".form-section").style.display = "block";
  } else {
    alert("Wrong answers. Try again.");
  }
});
