import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import PlayerCard from '../Card/PlayerCard';
import './SearchForm.css';


<<<<<<< HEAD
function SearchForm () {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');
=======
function SearchForm ({ history }) {
  const [playerStats, setPlayerStats] = useState([]);
  const [search, setSearch] = useState('goran_dragic');
>>>>>>> 309835f... Adding styling

  const handleSubmit = e => {
    e.preventDefault()
    const apiURL = `https://www.balldontlie.io/api/v1/players?search=${search}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setPlayers(data.data))
      .catch((err) => console.error(err));
  }

  console.log('players', players)


  return (
    <div className='MainPage'>
      <div>
        <h2 style={{ color:'#ec7f37' }}>Header Text Goes Here</h2>
        <p style={{ color:'#fff' }}>Short Description Goes Here</p>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Control 
                    size='lg' 
                    type='text' 
                    placeholder='Enter Player Name'
                    onChange={(e) => setSearch(e.target.value)}>
                </Form.Control>
            </Form.Row>
        </Form>
<<<<<<< HEAD
=======
       </div> 
      {playerStats
        .sort((a, b) => {
          return a.first_name > b.first_name
            ? -1
            : a.first_name < b.first_name
            ? 1
            : 0;
        })
        .map((player) => {
          return (
            <div onClick={() => handleClick(player.id)}>
              {/* <PlayerCard first={player.first_name} last={player.last_name} /> */}
            </div>
          );
        })}
>>>>>>> 309835f... Adding styling
    </div>
  );
}

export default SearchForm;
