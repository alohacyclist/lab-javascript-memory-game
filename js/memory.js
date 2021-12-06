class MemoryGame {
  constructor(cards) {

    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }

  shuffleCards(cards) {
/* 
      let m = this.cards.length, t, i;

      while(m) {
        i = Math.floor(Math.random() * m--);

        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
      }
      console.log(newCards);
      return cards; */
    }

  

  checkIfPair(card1, card2) {
    
    // add 1 to pairsClicked
    this.pairsClicked = this.pairsClicked + 1;

    // check if 2 cards were clicked
    const displayPairsClicked = document.querySelector('#pairs-clicked');
    if(this.pickedCards.length % 2 == 0) {
      displayPairsClicked.innerHTML = this.pairsClicked;
    }
      
    if(this.pickedCards[0].dataset.cardName === this.pickedCards[1].dataset.cardName) {
       this.pairsGuessed = this.pairsGuessed + 1;
       const displayPairsGuessed = document.querySelector('#pairs-guessed');
       displayPairsGuessed.innerHTML = this.pairsGuessed;
       this.pickedCards = [];
       return true;
      } else {
        this.pickedCards = [];
      }
      this.checkIfFinished();          
      
      // if 2 cards, set div back to class="card" -> .remove('turned')
      /* card1.className = 'card';
      card2.className = 'card'; */
      
    }



  pickCards (clickedCard) {
    this.pickedCards.push(clickedCard);
    if (this.pickedCards.length % 2 == 0) this.checkIfPair(this.pickedCards[0], this.pickedCards[1]);
    }

  checkIfFinished() {
    console.log(this.cards.length)
    // check if pairs guessed equals amount of pairs in the game
    if(this.pairsGuessed === this.cards.length / 2) {
      console.log('game finished!');
  } else {
    console.log('game not finished yet!');
  }
}}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
