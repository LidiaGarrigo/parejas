
class MemoryGame {
    
    constructor(cards) {
        this.cards = [...cards];
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }

    shuffleCard(cardsArr) {
        for(let i = cardsArr.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = cardsArr[i]
            cardsArr[i] = cardsArr[j]
            cardsArr[j] = temp
        } return cardsArr;
    };

    checkIfPair(firstCard, secondCard) {
        this.pairsClicked += 1;
        this.pairsGuessed += 1;
        if(firstCard == secondCard){
            return true;
        } else {
            this.pairsGuessed -= 1;
            return false;
        }
        
        
    }

    finished() {
        if (this.pairsClicked < 8) {
            return false;  
        } 
        if(this.pairsGuessed == 8){
            return true;
        }
        
    };
}
