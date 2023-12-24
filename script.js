document.addEventListener('DOMContentLoaded', function () {
  let currentCard = 1;
  const totalCards = 3;
  const nextButton = document.getElementById('nextCard');

  nextButton.addEventListener('click', () => {
    // Hide the current card
    document.getElementById('card' + currentCard).style.display = 'none';

    // Move to the next card, or loop back to the first
    currentCard = (currentCard % totalCards) + 1;

    // Show the new card
    document.getElementById('card' + currentCard).style.display = 'block';
  });
});
