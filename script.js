// kalssen Card representerar ett spelkort med suit, rank och value.
class Card{
    constructor (suit, rank, value)
{
    this.suit = suit;
    this.rank = rank;
    this.value= value;
}
}
// kalssen Deck skaper och hanterar en kortlek med 52 kort.
  class Deck {
    constructor () {
        this.cards = [];
        const suits = ['Hearts(Red)', 'Clubs(Black)', 'Diamonds(Red)', 'Spades (Black)'];
        const ranks = ['2','3','4','5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (let suit of suits){
            for (let i = 0; i < ranks.length; i++){
                this.cards.push(new Card(suit, ranks[i], i + 2));
            }
        }

    }
    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
  }
  //Klassen player representerar en spelare med dess namn och hand.
  class Player {
    constructor (name){
        this.name = name;
        this.hand = [];
    }
    calculateHandValue(){
        return this.hand.reduce((total, card) => total + card.value, 0);

    }
  }

  // Skapa en kortlek och skriv ut den i konsolen.
  const deck = new Deck();
  console.log('Kortlek innan blandning');
  console.log(deck.cards);

  // Blnada kortleken och skriva ut den blandade kortleken i konsolen.

  deck.shuffle();
  console.log('kortlekn efter blandning');
  console.log(deck.cards);

  // Skapa två spelare ocd dela ut 5 kort till varje spelare.
  const slim = new Player('Slim');
  const luka = new Player('Luka');

  for (let i = 0; i< 5; i++) {
    slim.hand.push(deck.cards.pop());
    luka.hand.push(deck.cards.pop());
  }

  // Skriva ut spelaren on´ch deras händer i konsolen.
  console.log('Slim');
  console.log(slim.hand);
  console.log('Luka');
  console.log(luka.hand);

  // Skriva ut antalet kort kavar i kortleken.
  console.log('antal kort kvar i kortleken:', deck.cards.length);
  
  //Skriva ut splerans händers sammanlagda numeriska värde i konsolen
  console.log('Slims handvärde:', slim.calculateHandValue());
  console.log('Lukas handvärde:', luka.calculateHandValue());

  // Splerna slänga 2 kort var i en kasthög.

  const discardPile = [];
  for (let i = 0; i < 2; i++) {
    discardPile.push(slim.hand.pop());
    discardPile.push(luka.hand.pop());

  }

  //Låt spelerna dra 2 nya kort var ur kortleken
  for (let i= 0; i < 2; i++) {

      slim.hand.push(deck.cards.pop());
      luka.hand.push(deck.cards.pop());
  }

  // skriva ut kortleken (nu med 38 kort kvar) och spelarna ( med 5 kort var) i konsollen.
  console.log('Kortlek efter att spelarna har slängt 2 kort var och dragit 2 nya kort');
  console.log(deck.cards);
  console.log('Slims hand efter att ha dragit nya kort:' , slim.hand);
  console.log('Lukas hand efter att ha dragit nya kort:' , luka.hand);

// skriva också ut spelarnas händer sammanlagda numeriska värde
console.log(' Slims handvärde efter att ah dragit nya kort:', slim.calculateHandValue());
console.log(' Lukas handvärde efter att ah dragit nya kort:', luka.calculateHandValue());

  
// spelarna slänga alla sina kort i kasthögen
discardPile.push(...slim.hand);
discardPile.push(...luka.hand);
slim.hand = [];
luka.hand = [];

// Flytta alla kort från kasthögen till kortleken.
deck.cards.push(...discardPile);
discardPile.length = 0;

// Blanda kortleken igen
deck.shuffle();
// Skriva ut den balandade kortleken i kosollen.
console.log('Kortlek efter att spelarena har slängt alla sina kort och kortleken balands igen;');
console.log(deck.cards);

  