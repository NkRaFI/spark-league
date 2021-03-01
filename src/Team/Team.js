import React from 'react';
import './Team.css';

const Team = (props) => {
    const players = props.selectedPlayers;
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h6>Total Players: {players.length}</h6>
                <h6>Salary</h6>
            </div>
            {
                players.map(player => {
                    return (
                        <div key={player.id} className="d-flex justify-content-between">
                            <div>
                                <p>{player.name}</p>
                            </div>
                            <div>
                                <p>{player.salary}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Team;