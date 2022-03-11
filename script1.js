// Creating a class for single card in the deck which will have its ranks, suit and value:
class Card {
    _ranks;
    _suit;
    _value;
    constructor(ranks, suit, value) {
        this._ranks = ranks;
        this._suit = suit;
        this._value = value;
    }
    get ranks() {
        return this._ranks;
    }
    get suit() {
        return this._suit;
    }
    get value() {
        return this._value;
    }
}
// Creating a deck and player's hands
class Deck {
    _cards;
    _player1Deck;
    _player2Deck;

    constructor() {
        this._cards = [];
        this._player1Deck = [];
        this._player2Deck = [];
    }
    //creating a getter for length of the array of _cards
    get numberOfCards() {
        return this._cards.length;
    }
    get player1Deck() {
        return this._player1Deck;
    }
    get player2Deck() {
        return this._player2Deck;
    }
    // creating a new deck and pushing suits and values in the _cards array
    freshDeck() {
        const SUITS = ["♠", "♣", "♥", "♦"];
        SUITS.forEach(suit => {
            for (let i = 2; i < 11; i++) {
                this._cards.push(new Card(i, suit, i));
            }
            this._cards.push(new Card('J', suit, 11));
            this._cards.push(new Card('Q', suit, 12));
            this._cards.push(new Card('K', suit, 13));
            this._cards.push(new Card('A', suit, 14));

        });
    }
    //creating a method that will randomly shuffle our cards in the deck
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            let newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this._cards[newIndex];
            this._cards[newIndex] = this._cards[i];
            this._cards[i] = oldValue;
            //          this._player1Deck.push(this._cards.splice((Math.floor(Math.random() * this.numberOfCards)), 1));
            //         this._player2Deck.push(this._cards.splice((Math.floor(Math.random() * this.numberOfCards)), 1));
        }
    }
    dealCards() {
        const midPoint = Math.ceil(this.numberOfCards / 2)
        this._player1Deck.push(this._cards.slice(0, midPoint));
        this._player2Deck.push(this._cards.slice(midPoint, this.numberOfCards));
    }
}
// Creating a Game class that will hold helper functions
class Game extends Deck {
    player1;
    player2;

    constructor() {
        super();
        this.player1 = '';
        this.player2 = '';

    }
    addPlayers() {

        this.player1 = prompt('Enter a name for a Player One');
        console.log(`Player 1: ${this.player1}`);
        this.player2 = prompt('Enter a name for a Player Two');
        console.log(`Player 2: ${this.player2}`);
        alert(`${this.player1} is the Player One name`);
        alert(`${this.player2} is the Player Two name`);

    }
    // Method deal cards will first create a deck, push values&suits in it and then shuffle it and deal it to players
    dealToPlayers() {
        alert('Press OK to deal cards to the players');
        this.deck = new Deck();
        this.deck.freshDeck();
        console.log('This should be the deck of cards:', this.deck);
        this.deck.shuffle();
        console.log('This should be the shuffled deck of cards:', this.deck)
        this.deck.dealCards();
        alert(`Deck has been shuffled and dealt to ${this.player1} and ${this.player2}`)
    }
    // Creating a method that will start our game, including Player1&Player2 Points
    startGame() {
        this.player1Points = 0;
        this.player2Points = 0;
        alert(`Game has started!!!`);

        // Looping through Player1Deck and Player2Deck values and checking if player1Deck has bigger
        // or smaller card and acordingly adding points to each player
        for (let i = 0; i < 26; i++) {
            if (this.deck._player1Deck[0][i].value > this.deck._player2Deck[0][i].value) {
                this.player1Points += 1;
            } else if (this.deck._player1Deck[0][i].value < this.deck._player2Deck[0][i].value) {
                this.player2Points += 1;
            }
        };
        // Declaring a winner : 
        if (this.player1Points > this.player2Points) {
            alert(`${this.player1} has won!
            The final score was ${this.player1Points} to ${this.player2Points}
            Good luck next time ${this.player2}!`);
            console.log(`Player 1 has won with ${this.player1Points} Points`);
        } else if (this.player2Points > this.player1Points) {
            alert(`${this.player2} has won!
            The final score was ${this.player2Points} to ${this.player1Points}
            Good luck next time ${this.player1}!`);
            console.log('Player 1 POINTS: ', this.player1Points);
            console.log('Player 2 POINTS: ', this.player2Points);
            console.log(`Player 2 has won with ${this.player2Points} Points`);
        } else {
            alert(`It is tie! 
            The final score was ${this.player2Points} to ${this.player1Points}`)
            console.log('Player 1 POINTS: ', this.player1Points);
            console.log('Player 2 POINTS: ', this.player2Points);
            console.log('It is a tie');
        }
    }

}
// creating new instaces that will launch our Menu App with methods inside

const newGame = new Game();
newGame.addPlayers();
newGame.dealToPlayers();
newGame.startGame();





