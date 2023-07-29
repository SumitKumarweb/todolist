import React, { useState } from "react";
import Card from "./Card/Card";

function SearchBar() {
    const [listCard, setListCard] = useState("");
    const [cardItem, setCardItem] = useState([]);

    function searchChangeText(e) {
        setListCard(e.target.value);
    }

    function addDataCard() {
        const trimmedHeading = listCard.trim();

        if (trimmedHeading === "") {
            return;  
        }

        setCardItem((prevCardItems) => [
            ...prevCardItems,
            { heading: trimmedHeading },
        ]);

        setListCard("");
    }

    return (
        <>
            <div className="searchBar">
                <input
                    type="text"
                    onChange={searchChangeText}
                    value={listCard}
                    placeholder="Enter your List"
                />
                <button id="inputBtn" onClick={addDataCard}>
                    Add
                </button>
            </div>
            <div className="Cards">
                {
                    cardItem.map((card, index) => (
                        <Card key={index} heading={card.heading} />
                    ))}
            </div>
        </>
    );
}

export default SearchBar;
