import React from "react";
import "../Styles/cardStyle.css";


const CardComponent  = (props: any) =>{
    const {valueName, suitIcon, isDrawn} = props;
    const colour = suitIcon === "♥︎" || suitIcon === "♦︎" ? "red" : "black";
    return(
        <div className = {colour==="red" ? "card redCard" : "card blackCard"}>
            <div>{valueName}</div>
            <div>{suitIcon}</div>
        </div>
    )
}

export default CardComponent;