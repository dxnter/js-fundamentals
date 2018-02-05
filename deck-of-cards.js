class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
class Deck {
    constructor() {
        this.deck = [];
        var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
        var value = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
        for (let value in suits) {
            for (let suit in suits) {
                this.deck.push(new Card(suits[suit], value));
            }
        }
    }
    reset () {
        this.deck = [];
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    drawCard(deck) {
        this.hand.push(deck.deal());
    }
    drawHand(num, deck) {
        for (var i = 1; i < num; i++) {
            this.hand.push(deck.deal());
        }
    }
    discard(suit, value) {
        var remove = new Card(suit, value);
        return this.hand.pop(remove);
    }
}

var deck = new Deck();
console.log(deck);