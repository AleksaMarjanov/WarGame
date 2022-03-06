import Deck from './deck.js'

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
        }
    }

}

const menu = new Menu();
menu.start();

