import React, { useEffect } from 'react';
import './App.css';
import "./Styles/cardStyle.css";
import DeckComponent from './Components/DeckComponent';


function App() {
  const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const deckArray : any = [];
    
    for(let i=0; i< suits.length; i++){
        for(let j=0; j<values.length; j++){
            const eachCard = {valName: values[j] , suitIcon: suits[i], isDrawn: false};
            deckArray.push(eachCard)
        }
        // console.log(deckArray);
        
    }


  return (
    <div className="App">
      <header className="App-header">
        Card Game Loaded!
      </header>
      <DeckComponent deckArr={deckArray}/>
    </div>
  );
}

export default App;
