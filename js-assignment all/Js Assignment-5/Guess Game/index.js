 const levels = {
      easy: 10,
      medium: 50,
      hard: 100
    };

    let currentLevel = 'medium';
    let randomNumber = Math.floor(Math.random() * levels[currentLevel]) + 1;

    document.querySelectorAll('.btn-level').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-level').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLevel = btn.getAttribute('data-level');
        randomNumber = Math.floor(Math.random() * levels[currentLevel]) + 1;
        document.getElementById('message').textContent = `Game started! Range: 1 - ${levels[currentLevel]}`;
        document.getElementById('result').textContent = '';
        document.getElementById('guessInput').value = '';
      });
    });

    document.getElementById('submitGuess').addEventListener('click', () => {
      const guess = parseInt(document.getElementById('guessInput').value);
      if (isNaN(guess)) {
        document.getElementById('result').textContent = 'Please enter a number!';
        return;
      }

      if (guess === randomNumber) {
        document.getElementById('result').textContent = '🎉 Correct! You guessed the number!';
      } else if (guess < randomNumber) {
        document.getElementById('result').textContent = 'Too low! Try again.';
      } else {
        document.getElementById('result').textContent = 'Too high! Try again.';
      }
    });