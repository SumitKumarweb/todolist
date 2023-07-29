import React, { useState } from "react";

function Card({ heading , number }) {
  const [done, setDone] = useState("pending");
  const [card, setCard] = useState(true);

  function updateStatus() {
    setDone(done === "pending" ? "Complete" : "pending");
  }

  function handleRemoveCard() {
    setCard(false);
  }

  if (card) {
    return (
      <div className="Card">
        <h2>{number} : {heading}</h2>
        <h3>Status: {done}</h3>
        <button className="btn" onClick={updateStatus}>
          Update Status
        </button>
        <button className="btn" onClick={handleRemoveCard}>
          Remove
        </button>
      </div>
    );
  }

  return null;
}

export default Card;
