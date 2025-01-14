// constructor function to create object with properties cards
function Deck() {
    // "this" is to assign properties to the instance
    this.cards = [];

    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    const suits = ["Diamonds", "Clubs", "Heart", "Spade"];
    
    this.cards = ranks.flatMap((rank) => {
        return suits.map((suit) => {
            return ({rank, suit});
        })
    })
}

// add methods to prototype
// use prototype method as they're available to all instances
// if this method is added in the constructor function, each instance would have its own copy so this allows for efficient memory
Deck.prototype.getCards = function() {
    return this.cards;
};

Deck.prototype.getRanks = function() {
    const cards = this.cards;

    return cards.map(card => card.rank);
}

Deck.prototype.drawCard = function() {
    //no cards left in the deck 
    if (this.cards.length === 0) {
        return null; 
    }

    //random card
    const randomCard = Math.floor(Math.random() * this.cards.length);
    const drawnCard = this.cards[randomCard]; 

    //remove that random card from the deck
    this.cards.splice(randomCard, 1); 

    return drawnCard; 
};
// see if theres 13 unique ranks?

// const deck = new Deck();
// const cards = deck.getCards();
// const ranks = deck.getRanks();
// console.log(deck);
// console.log(cards);
// console.log(ranks);
// const shuffle = deck.drawCard();
// console.log(shuffle)
// console.log(shuffle.rank)
// console.log((Math.random() * cards.length))

// const cardsWithAces = cards.filter((cardsWithAce) => cardsWithAce.rank === "Ace");
// console.log(cardsWithAces);

// for (var i = 0; i < cardsWithAces.length; i++) {
//     console.log(cardsWithAces[i].rank);
// }

// const aces = cards.map(card => card.rank === "Ace");
// console.log(aces);

// const trueCount = aces.filter(value => value === true).length;

// if (trueCount > 0) {
//     console.log(trueCount);
// } else {
//     console.log("wrong");
// }

// use the Deck function in another file
module.exports = Deck;