const Deck = require("../deck");

describe("Deck", () => {
    //arrange
    let deck;

    // "new" keyword is used to create an instance deck by calling the constructor function
    beforeEach(() => {
        deck = new Deck();
    });

    //positive test
    it("should have 52 cards in the deck", () => {
        //arrange
        //act
        const numberOfCards = deck.getCards();

        //assert
        expect(numberOfCards).toHaveLength(52);
    });

    it("should have 4 aces", () => {
        //act
        const cards = deck.getRanks();
        const cardsWithAces = cards.filter((cardsWithAce) => cardsWithAce === "Ace");

        //assert
        expect(cardsWithAces).toHaveLength(4);
    });

    it("should draw a random card from the deck", () => {
        //act
        const drawACard = deck.drawCard();
        const amountOfCardsInDeck = deck.getCards().length;
        const card = Number(drawACard.rank);

        //assert
        expect(amountOfCardsInDeck).toEqual(51);
        expect(typeof card).toEqual("number");

    });

    it("should return null if there are no cards left in the deck", () => {
        //act
        //draw all cards
        for (let i = 0; i < 52; i++) {
            deck.drawCard();
        };

        //draw a card with no cards left
        const drawACard = deck.drawCard();

        //assert
        expect(drawACard).toBeNull();

    });

})
