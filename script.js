//import Deck from './deck.js'
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

// Creating a deck and player
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
        //console.warn(this._cards);
    }

    //creating a method inside our Deck class to randomly shuffle
    shuffle() {
        for (let i = 0; i < 26; i++) {
            this._player1Deck.push(this._cards.splice((Math.floor(Math.random() * this.numberOfCards)), 1));
            this._player2Deck.push(this._cards.splice((Math.floor(Math.random() * this.numberOfCards)), 1));
        }
    }
}



class Menu {
    player1;
    player2;

    constructor() {
        this.player1 = '';
        this.player2 = '';

    }
    start() {
        let selection = this.showMainMenu();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addPlayers();
                    break;
                case '2':
                    this.dealCards();
                    break;
                case '3':
                    this.startGame();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert('Goodbye!');
    }
    showMainMenu() {
        return prompt(`
        0) Exit
        1) Add Players
        2) Shuffle & Deal Cards
        3) Start Game
        >-----------------------------<
        `);
    }
    addPlayers() {

        this.player1 = prompt('Enter a name for a Player One');
        console.log(`Player 1: ${this.player1}`);
        this.player2 = prompt('Enter a name for a Player Two');
        console.log(`Player 2: ${this.player2}`);
        alert(`${this.player1} is the Player One name`);
        alert(`${this.player2} is the Player Two name`);

    }
    dealCards() {
        alert('Press OK to deal cards to the players');
        this.deck = new Deck();
        this.deck.freshDeck();
        console.log('This should be the deck of cards:', this.deck);
        this.deck.shuffle();
        console.warn('This is the shuffled deck: ', this.deck);
        alert(`Deck has been shuffled and dealt to ${this.player1} and ${this.player2}`)
    }
    startGame() {
        this.player1Points = 0;
        this.player2Points = 0;
        alert(`Game has started!!!`);


        for (let i = 0; i < 26; i++) {
            if (this.deck.player1Deck[i][0].value > this.deck.player2Deck[i][0].value) {
                this.player1Points += 1;
            } else if (this.deck.player1Deck[i][0].value < this.deck.player2Deck[i][0].value) {
                this.player2Points += 1;
            }
        };

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
            alert(`It is a tie!
            The final score was ${this.player1}: ${this.player1Points} to ${this.player2}: ${this.player2Points}
            `);
            console.log('Player 1 POINTS: ', this.player1Points);
            console.log('Player 2 POINTS: ', this.player2Points);
            console.log('It is a tie');
        }
    }

}

const menu = new Menu();
menu.start();







