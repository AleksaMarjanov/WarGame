const expect = chai.expect;


describe('Is input in the prompt string?', () => {
    describe('#addPlayers', () => {
        it('should return true if the input is string', () => {
            // My class is Menu, method is addPlayers()
            let string = new Menu();
            expect(string.addPlayer).to.be.a('string');

        })
    })
})
