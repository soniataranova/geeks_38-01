let cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961", "41201989", "79874565"];
let visaCard = 0;
for(let card of cards){
    if(card[0] === "4"){
        visaCard++
    }
}
console.log(`Карт VISA ${visaCard} из ${cards.length}.`)