import React from 'react';

const Menu = ({ onStartGame }) => {
  return (
    <div className="menu">
      <button onClick={() => onStartGame('DQN')}>Start with DQN</button>
      <button onClick={() => onStartGame('A3C')}>Start with A3C</button>
      <button onClick={() => onStartGame('MCCFR')}>Start with MCCFR</button>
    </div>
  );
};

export default Menu;
