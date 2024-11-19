import React, { useState } from 'react';
import Card from './Card';
import { initializeDeck } from '../utils/CardUtils';

const GameBoard = () => {
  const [deck, setDeck] = useState(initializeDeck());

  return (
    <div className="game-board">
      {deck.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default GameBoard;
