// Imports
import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ id, front, back, handleCompletion, cardProgress }) => {
  // Variables to control individual card flip and tick status
  const [isFlipped, setFlipped] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const userCardClick = () => {
    // Prevent card flip if flip container is disabled
    if (!isComplete && id !== cardProgress) return;
    
    // Flip the card and mark it as complete upon first flip
    setFlipped(!isFlipped);
    if (!isComplete) {
      setComplete(true);
      handleCompletion(id, true); 
    }
  };

  // Component rendering
  return (
    // Note: I know this line could be shorter but I felt it was more readable this way
    // Apply .disabled if the card id doesn't equal card progress and hasn't already beed completed + apply .flipped to show back face if clicked
    <div className={"flip-container " + (id !== cardProgress && !isComplete ? 'disabled ' : '') + (isFlipped ? 'flipped' : '')} onClick={userCardClick}>
      <div className="flip-card">
        <img
          className={`${isFlipped ? 'tick-back' : 'tick-front'} tick`}
          src={isComplete ? '/assets/complete.png' : '/assets/incomplete.png'}
          alt={isComplete ? "You've read this" : 'Unread'}
        />
        <div className={`card-content content-front ${isFlipped ? 'hidden' : ''}`}>
          <img className="front-asset img-frame" src={front.asset} alt={front.title} />
          <span className="front-title">{front.title}</span>
        </div>
        <div className={`card-content content-back ${isFlipped ? '' : 'hidden'}`}>
          <span className="back-title">{back.title}</span>
          <div className="card-body-text" dangerouslySetInnerHTML={{ __html: back.description }} />
          <img className="back-asset img-frame" src={back.asset} alt={back.title} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;