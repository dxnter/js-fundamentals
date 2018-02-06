class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }
  reset() {
    this.deck = [];

    const suit = ["hearts", "diamonds", "clubs", "spades"];
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 13; j++) {
        this.deck.push(new Card(suit[i], value[j]));
      }
    }
    return this.deck;
  }
  shuffle() {
    var currentIndex = this.deck.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
    return this.deck;
  }
  deal() {
    return this.deck.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  draw(deck) {
    this.hand.push(deck.deal());
    return this;
  }

  discard() {
    return this.hand.pop();
  }
}
