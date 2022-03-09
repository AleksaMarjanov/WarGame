const expect = chai.expect;


describe('Is the number of cards 52 before dealing to the players?', () => {
    describe('#getNumberOfCards', () => {
        it('should return true if number of card is 52 before dealing', () => {
            // My class is Menu, method is addPlayers()
            const newDeck = new Deck();
            newDeck.freshDeck();
            console.log('Test', newDeck.numberOfCards)
            expect(newDeck.numberOfCards).to.equal(52);
        })
    })
})
