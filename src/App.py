import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import Menu from './components/Menu';
import DQNAgent from './agents/DQNAgent';
import A3CAgent from './agents/A3CAgent';
import MCCFRAgent from './agents/MCCFRAgent';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [agent, setAgent] = useState(null);

  const startGame = (agentType) => {
    let selectedAgent;
    if (agentType === 'DQN') {
      selectedAgent = new DQNAgent();
    } else if (agentType === 'A3C') {
      selectedAgent = new A3CAgent();
    } else if (agentType === 'MCCFR') {
      selectedAgent = new MCCFRAgent();
    }

    setAgent(selectedAgent);
    setGameStarted(true);
  };

  return (
    <div>
      {!gameStarted ? (
        <Menu onStartGame={startGame} />
      ) : (
        <GameBoard agent={agent} />
      )}
    </div>
  );
};

export default App;
