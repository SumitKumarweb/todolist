import React, { useState } from "react";

function Card({ heading }) {
  const [done, setDone] = useState("pending");
  const [card, setCard] = useState(true);

  function updateStatus() {
    setDone(done === "pending" ? "Complete" : "pending");
  }

  function removeCard() {
    setCard(false);
  }

  if (card) {
    return (
      <div className="Card">
        <h2>{heading}</h2>
        <h3>Status: {done}</h3>
        <button className="btn" onClick={updateStatus}>
          Update Status
        </button>
        <button className="btn" onClick={removeCard}>
          Remove
        </button>
      </div>
    );
  }

  return null;
}

export default Card;
