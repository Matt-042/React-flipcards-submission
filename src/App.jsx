// Imports
import React, { useState } from 'react';
import Introduction from './components/Introduction';
import Conclusion from './components/Conclusion';
import FlipCard from './components/FlipCard';
import jsonData from './data.json';
import './App.css';

const App = () => {
  const { flipCards: initialFlipCards } = jsonData;
  const [flipCards, setFlipCards] = useState(initialFlipCards);
  // Variables to control conclusion display and linear card flip order
  const [showConclusion, setShowConclusion] = useState(false);
  const [cardProgress, setCardProgress] = useState(1); 

  const handleCompletion = (id, isComplete) => {
    // Update the completion status of the corresponding flip card
    setFlipCards((prevFlipCards) =>
      prevFlipCards.map((card) =>
        card.id === id ? { ...card, isComplete } : card
      )
    );
    // Check if all flip cards are completed to show the conclusion
    setShowConclusion(flipCards.every((card) => card.id === id ? isComplete : card.isComplete));
    // Update card progress
    setCardProgress(id + 1); 
  };

  // App rendering
  return (
    <>
      <Introduction />
      <div className="responsive-grid">
        {flipCards.map((card) => (
          <FlipCard
            key={card.id}
            {...card}
            handleCompletion={handleCompletion}
            cardProgress={cardProgress}
          />
        ))}
      </div>
      {showConclusion && <Conclusion />}
    </>
  );
};

export default App;