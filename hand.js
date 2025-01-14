const Card = require("./card");
const Deck = require("./deck");

function Hand() {
  this.cards = [];
}

//add card to cards in hand
Hand.prototype.addCard = function (card) {
  this.cards.push(card);
  return this.cards;
};

//opening hand to start with two cards
Hand.prototype.openingHand = function (deck) {
  const card1 = deck.drawCard();
  this.addCard(card1.rank);

  const card2 = deck.drawCard();
  this.addCard(card2.rank);

  return this.cards;
};

//calculate value of hand
Hand.prototype.calculateScore = function () {
  let score = 0;
  let acesCount = 0;

  this.cards.forEach((card) => {
    if (
      card === "Jack" ||
      card === "Queen" ||
      card === "King"
    ) {
      score += 10;
    } else if (card === "Ace") {
      acesCount++;
    } else {
      score += Number(card);
    }
  });
  
  // the score of an ace depending on the condition
  for (let i = 0; i < acesCount; i++) {
    if (score + 11 <= 21) {
      score += 11;
    } else {
      score += 1;
    }
  }
  
  return score;
};

// updates and evaluates score of current hand
Hand.prototype.isBust = function() {
    const score = this.calculateScore();

    if (score > 21) {
      return 'Bust';
    }
    else {
      return 'Valid hand';
    }
};

Hand.prototype.chooseHitOrStand = function(choice, deck) {
  if (this.isBust() === "Valid hand") {
      if (choice === "Hit") {
          const card = deck.drawCard(); 
          this.addCard(card.rank); 

          return this.isBust();
      } else if (choice === "Stand") {
          return this.calculateScore();
      } else {
          return null;
      }
  } else {
      return this.isBust();

  }
};

module.exports = Hand;
