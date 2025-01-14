const Hand = require("../hand");
const Card = require("../card");
const Deck = require("../deck");

describe("Hand", () => {
    //arrange
    let hand;

    beforeEach(() => {
        hand = new Hand();
    });

    it("should add a new card to the hand", () => {
        //arrange 
        const card = new Card("2");

        //act 
        hand.addCard(card);

        //assert
        expect(hand.cards[0]).toEqual(card);
        expect(hand.cards.length).toEqual(1);
    });

    it("should initially have two cards to the opening hand", () => {
        //arrange
        const deck = new Deck();

        //act
        const drawnCards = hand.openingHand(deck);
        const rankedDrawnCards = drawnCards.map(card => card.rank);

        //assert
        expect(rankedDrawnCards.length).toEqual(2);
    })

    it("should calculate numerical cards correctly", () => {     
        //act
        hand.addCard("5");
        hand.addCard("8");
        hand.addCard("2");
        const totalScoreOfCards = hand.calculateScore();

        //assert
        expect(totalScoreOfCards).toEqual(15);
    });

    it("should calculate face cards correctly", () => {
        //act
        hand.addCard("King");
        hand.addCard("Ace");
        const totalScoreOfCards = hand.calculateScore();

        //assert
        expect(totalScoreOfCards).toEqual(21);
    });

    it("should calculate 3 cards correctly", () => {
        //act
        hand.addCard("King");
        hand.addCard("Queen");
        hand.addCard("Ace")
        const totalScoreOfCards = hand.calculateScore();

        //assert
        expect(totalScoreOfCards).toEqual(21);
    });

    it("should calculate ace cards correctly", () => {
        //act
        hand.addCard("9");
        hand.addCard("Ace");
        hand.addCard("Ace");
        const totalScoreOfCards = hand.calculateScore();

        //assert
        expect(totalScoreOfCards).toEqual(21);
    });

    it("should have a valid hand when the score is 21 or less", () => {
        //act
        hand.addCard("10");
        hand.addCard("King");
        const validHandOfCards = hand.isBust();

        //assert
        expect(validHandOfCards).toEqual("Valid hand");
    });

    it("should be bust when the score is 22 or more", () => {
        //act
        hand.addCard("Jack");
        hand.addCard("King");
        hand.addCard("9");
        const bustCards = hand.isBust();

        //assert
        expect(bustCards).toEqual("Bust");
    });

    it("should receive another card to the valid hand of cards and update the score when the player chooses to hit", () => {
        //arrange
        const deck = new Deck();

        //act
        hand.addCard("5");
        hand.addCard("2");
        const chooseHit = hand.chooseHitOrStand('Hit', deck);

        //assert
        expect(chooseHit).toEqual("Valid hand");
        expect(hand.cards.length).toBe(3);
    });

    it("should receive no further cards to the valid hand of cards when the player chooses to stand", () => {
        //arrange
        const deck = new Deck();

        //act
        hand.addCard("Queen");
        hand.addCard("7");
        hand.addCard("3");
        const chooseStand = hand.chooseHitOrStand('Stand', deck);

        //assert
        expect(chooseStand).toEqual(20);
        //proving that the amount of cards to hand doesnt change and we evaluate the score
        expect(hand.cards.length).toBe(3);
    });

    it("should return null for a choice other than 'Hit' or 'Stand'", () => {
        //arrange
        const deck = new Deck();

        //act
        const chooseNull = hand.chooseHitOrStand('', deck);

        //assert
        expect(chooseNull).toBeNull();

    });


    // it("should throw an error if not provided a Card object as an argument", () => {
    //     //arrange
    //     const err = new Error(
    //         "Expected parameter 'card' to be an instance of Card"
    //     );

    //     //act
    //     const cb = () => {
    //         hand.addCard();
    //     };

    //     //assert
    //     expect(cb).toThrowError(err);
    // });
});

