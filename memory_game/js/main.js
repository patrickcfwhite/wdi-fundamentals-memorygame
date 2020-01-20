let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[1];
let cardTwo = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " +  cardsInPlay[1]);
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!")
    } else {
        alert("Sorry, try again.")
    }
}