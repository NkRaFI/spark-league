import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {name, salary, img, id} = props.player;
    return (
        <div className="col-md-6">
            <div className="row player-cart">
                <div className="col-5">
                    <img className="img-fluid" src={img} alt=""/>
                </div>
                <div className="col-7">
                    <div className="player-details">
                        <h5 className="text-primary">{name}</h5>
                        <h5 className="mb-3">Salary: ${salary} million</h5>
                        <Button onClick={()=> props.handleAddToTeam(props.player)} key={id} className="btn-primary">
                            <FontAwesomeIcon icon={faPlus} /> add to team
                        </Button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Player;