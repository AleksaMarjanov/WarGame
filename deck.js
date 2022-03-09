// // Creating a class for single card in the deck which will have its ranks, suit and value:
// class Card {
//     _ranks;
//     _suit;
//     _value;
//     constructor(ranks, suit, value) {
//         this._ranks = ranks;
//         this._suit = suit;
//         this._value = value;
//     }
//     get ranks() {
//         return this._ranks;
//     }
//     get suit() {
//         return this._suit;
//     }
//     get value() {
//         return this._value;
//     }
// }

// // Creating a deck and player
// class Deck {
//     _cards;
//     _player1Deck;
//     _player2Deck;

//     constructor() {
//         this._cards = [];
//         this._player1Deck = [];
//         this._player2Deck = [];
//     }
//     //creating a getter for length of the array of _cards
//     get numberOfCards() {
//         return this._cards.length;
//     }
//     get player1Deck() {
//         return this._player1Deck;
//     }
//     get player2Deck() {
//         return this._player2Deck;
//     }

//     freshDeck() {
//         const SUITS = ["♠", "♣", "♥", "♦"];


//         SUITS.forEach(suit => {
//             for (let i = 2; i < 11; i++) {
//                 this._cards.push(new Card(i, suit, i));
//             }
//             this._cards.push(new Card('J', suit, 11));
//             this._cards.push(new Card('Q', suit, 12));
//             this._cards.push(new Card('K', suit, 13));
//             this._cards.push(new Card('A', suit, 14));

//         });
//         //console.warn(this._cards);
//     }

//     //creating a method inside our Deck class to randomly shuffle
//     shuffle() {
//         for (let i = 0; i < 26; i++) {
//             this._player1Deck.push(this._cards.splice((Math.floor(Math.random() * this.numberOfCards)), 1));
//             this._player2Deck.push(this._cards.splice((Math.floor(Math.random() * this.numberOfCards)), 1));
//         }
//     }
// }

