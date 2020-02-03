const cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }]
let count = 0
const cardsInPlay = []
let mismatch = false

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('img')
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener('click', flipCard)
    document.getElementById('game-board').appendChild(cardElement)
  }
}
function resetBoard() {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.getElementsByTagName('img')[i]
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.addEventListener('click', flipCard)
  }
}
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log('You found a match!')
    alert('You found a match!')
    updateCount()
  } else {
    console.log('Sorry, try again.')
    alert('Sorry, try again.')
    mismatch = true
  }
}

function displayCount() {
  const counter = document.getElementById('counter')
  counter.innerHTML = `User score: ${count} pairs`
}

function updateCount() {
  count = count + 1
  displayCount()
}



function flipCard() {
  if (mismatch === true) {
    resetBoard()
    mismatch = false
  } else {
    const cardId = this.getAttribute('data-id')
    console.log('User flipped ' + cards[cardId].rank)
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    cardsInPlay.push(cards[cardId].rank)
    this.setAttribute('src', cards[cardId].cardImage)
    if (cardsInPlay.length === 2) {
      checkForMatch()
      cardsInPlay.splice(0, 2)
    }
  }
}
const button = document.getElementById('reset')
button.addEventListener('click', resetBoard)
createBoard()
displayCount()