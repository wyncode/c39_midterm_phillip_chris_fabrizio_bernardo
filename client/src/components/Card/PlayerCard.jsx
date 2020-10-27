import React from 'react';
import Card from 'react-bootstrap/Card';
import './PlayerCard.css'

const PlayerCard = (props) => {
    return ( 
        <Card style={{ width: 200, margin: 10}}>
            <a href={'#'} className='card-image-background'
                ><Card.Img src={'https://nba-players.herokuapp.com/players/dragic/goran'} />
            </a>
            <Card.Body>
            <Card.Title>{props.first} {props.last}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default PlayerCard;