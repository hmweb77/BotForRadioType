function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function clickRandomRadioButtons() {
  const questions = document.querySelectorAll('.QuestionBody');
  
  questions.forEach(question => {
    const radioButtons = question.querySelectorAll('input[type="radio"]');
    if (radioButtons.length > 0) {
      const randomIndex = getRandomInt(radioButtons.length);
      radioButtons[randomIndex].click();
    }
  });
}

let clickCount = 0;
const interval = setInterval(() => {
  if (clickCount < 100) {
    clickRandomRadioButtons();
    clickCount++;
  } else {
    clearInterval(interval);
    document.querySelector('.NextButton').click();
  }
}, 500);
clickRandomRadioButtons();

