import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import "../Styles/cardStyle.css";

const DeckComponent = (props: any) =>{
    const [deckList, setDeckList] = useState([{}]);
    const {deckArr} = props;

   useEffect(() =>{
    // console.log(deckArr);
    
    // setDeckList([...deckArr]);

   }, [deckArr])
   
   const getRandomNumber = (min: any, max: any, count: any) =>{
        const numbers = new Set();
        var undrawnCardsLength = deckArr.filter((x : any) => x.isDrawn === false).length

        if(undrawnCardsLength < count){
            console.error(undrawnCardsLength, "cards Left!")
            alert(undrawnCardsLength+" cards Left! Cannot draw more cards")
            return
        }

        while (numbers.size < count && undrawnCardsLength >= count) {
            let x = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!deckArr[x].isDrawn)
                numbers.add(x);
        }
        return Array.from(numbers); 
   }

   const drawRandomCards = () =>{
        var cardIndexArr = getRandomNumber(0, 51, 5); // 53 is used as the upper bound to include 52
        var drawnCardsArr : any = [];
        
        cardIndexArr?.forEach((index: any) =>{
            console.log(index, deckArr[index]);
            deckArr[index].isDrawn = true;
            drawnCardsArr.push(deckArr[index])
        })

        console.log(cardIndexArr, drawnCardsArr, deckArr);

        return setDeckList(drawnCardsArr)
   }

   const shuffleDeck = () =>{
    deckArr.map((a: any)=> a.isDrawn = false)
    console.log(deckArr);
    
   }

    return (<div className="deck">
            <div>
                <button className = "card" onClick={()=> drawRandomCards()}>Draw Card</button>
            </div> 
            <div>
                <button className = "card" onClick={()=> shuffleDeck()}>Shuffle Deck</button>
            </div> 
            <div className="card_container">
            {deckList?.map((card: any, index: any)=> 
                <CardComponent key = {index} valueName={card.valName} suitIcon={card.suitIcon} isDrawn={card.isDrawn}/>)
            }
            </div>
        
    </div>)
}

export default DeckComponent;