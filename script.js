/**
 * Wordle-like game
 * ----------------
 * - Fetches random words from an API
 * - Shuffles the selected word
 * - Renders shuffled letters as individual cards
 * - Allows the user to guess the word with limited attempts
 */

const API_URL =
    'https://random-words-api.kushcreates.com/api?language=en&length=8&words=10'

/**
 * Game state
 */
const game = {
    randomWord: '',
    shuffledWord: '',
    lifes: 5,
    gameState: true
}

/**
 * DOM elements
 */
const lettersContainer = document.querySelector('#letters')
const guessInput = document.querySelector('#guess')
const checkButton = document.querySelector('#check')
const resultDiv = document.querySelector('#result')
const triesDiv = document.querySelector('#tries')

checkButton.addEventListener('click', checkWord)

/**
 * Initialize game
 */
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length)

        game.randomWord = data[randomIndex].word
        game.shuffledWord = shuffleString(game.randomWord)

        renderLetters(game.shuffledWord)
        updateTries()
    })
    .catch(error => console.error('API Error:', error))

/**
 * Shuffle letters of a string (Fisher–Yates)
 */
function shuffleString(word) {
    const letters = word.split('')

    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[letters[i], letters[j]] = [letters[j], letters[i]]
    }

    return letters.join('')
}

/**
 * Render shuffled letters as individual cards
 */
function renderLetters(word) {
    lettersContainer.innerHTML = ''

    for (const letter of word) {
        const letterDiv = document.createElement('div')
        letterDiv.classList.add('letter')
        letterDiv.textContent = letter.toUpperCase()
        lettersContainer.appendChild(letterDiv)
    }
}

/**
 * Check user guess
 */
function checkWord() {
    if (!game.gameState) return

    const userGuess = guessInput.value.trim().toLowerCase()
    const correctWord = game.randomWord.toLowerCase()

    if (userGuess === correctWord) {
        resultDiv.textContent = '✅ Correct!'
        resultDiv.className = 'result win'
        game.gameState = false
    } else {
        game.lifes--

        if (game.lifes === 0) {
            resultDiv.textContent = `❌ Game Over. The word was "${game.randomWord}"`
            resultDiv.className = 'result lose'
            game.gameState = false
        } else {
            resultDiv.textContent = '❌ Wrong word. Try again!'
            resultDiv.className = 'result try'
        }
    }

    guessInput.value = ''
    updateTries()
}

/**
 * Update remaining tries text
 */
function updateTries() {
    triesDiv.textContent = `Remaining attempts: ${game.lifes}`
}
