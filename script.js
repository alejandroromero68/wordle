const words = ['CRANE', 'SLATE', 'APPLE', 'BRAVE', 'GRAIN', 'PLANT', 'SHARE']; // List of possible words
let targetWord = getRandomWord();

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].split('');
}

function checkWord() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        const inputs = row.querySelectorAll('input');
        const guess = Array.from(inputs).map(input => input.value.toUpperCase());
        
        guess.forEach((letter, index) => {
            if (letter === targetWord[index]) {
                inputs[index].classList.add('correct');
            } else if (targetWord.includes(letter)) {
                inputs[index].classList.add('present');
            } else {
                inputs[index].classList.add('absent');
            }
        });
    });
}

function resetGame() {
    const inputs = document.querySelectorAll('#wordle-grid input');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'present', 'absent');
    });
    targetWord = getRandomWord(); // Get a new target word
}
