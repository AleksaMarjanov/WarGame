const expect = chai.expect;


describe('Is the number of cards 52 before dealing to the players?', () => {
    describe('#getNumberOfCards', () => {
        it('should return true if number of card is 52 before dealing', () => {
            // My class is Menu, method is addPlayers()
            const newDeck = new Deck();
            newDeck.freshDeck();
            console.log('Test number of cards: ', newDeck.numberOfCards)
            expect(newDeck.numberOfCards).to.equal(52);
        });
        it('should throw an error if number of cards is not 52', () => {
            expect(() => {
                getNumberOfCards();
            }).to.Throw(Error);
        })
    })
})
