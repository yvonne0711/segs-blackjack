const Card = require("../card");

describe("Card", () => {
    it("should display the numerical value of the card", () => {
        //arrange
        const card = new Card("2");

        //act
        const valueOfCard = card.getValue();

        //assert
        expect(valueOfCard).toEqual("2");

    });
    
    it("should display the face value of the card", () => {
        //arrange
        const card = new Card("King");

        //act
        const valueOfCard = card.getValue();

        //assert
        expect(valueOfCard).toEqual("King");
    });
});