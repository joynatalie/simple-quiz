// Get the form element
const quizForm = document.querySelector('form');

// Add an event listener for the form submit event
quizForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the user's answers from the form
  const userAnswers = {
    q1: quizForm.q1.value,
    q2: quizForm.q2.value,
    q3: quizForm.q3.value
  };
  
  // Define the correct answers
  const correctAnswers = {
    q1: 'b',
    q2: 'b',
    q3: 'b'
  };
  
  // Check the user's answers and calculate the score
  let score = 0;
  for (const question in userAnswers) {
    if (userAnswers[question] === correctAnswers[question]) {
      score++;
    }
  }
  
  // Display the user's score
  const resultMessage = `You scored ${score} out of ${Object.keys(correctAnswers).length}!`;
  alert(resultMessage);
});
