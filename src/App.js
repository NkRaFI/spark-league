import './App.css';
import playerData from './playerData/playerData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Player from './Player/Player';
import Team from './Team/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPooStorm } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => setPlayers(playerData), []);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleAddToTeam = (player) => {
    const newPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newPlayers);
  }
  const totalBudget = selectedPlayers.reduce((sum, player) => sum + player.salary, 0);
  return (
    <div>

      <header className="bg-primary">
        <h3><FontAwesomeIcon icon={faPooStorm} /> Spark League Auction</h3>
      </header>

      <main className="container">
        <div className="row mt-5">
          <div className="col-lg-8">
                <div>
                  <h3>Players Available</h3>
                </div>
                <div className="row">
                  {
                    players.map(player => <Player player={player} handleAddToTeam={handleAddToTeam} key={player.id}></Player>)
                  }
            </div>
          </div>

          <div className="col-lg-4">
            <h3 className="mb-4">Selected Players</h3>
            <div className="team-details">
              <Team selectedPlayers={selectedPlayers}></Team>
              <div className="d-flex justify-content-between text-primary">
                <h6>Total Budget Needed:</h6>
                <h6>{totalBudget}</h6>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
