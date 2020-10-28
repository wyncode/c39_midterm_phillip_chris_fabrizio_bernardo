import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import './SearchForm.css';


function SearchForm () {
  const history = useHistory();
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    const apiURL = `https://www.balldontlie.io/api/v1/players?search=${search}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setPlayers(data.data))
      .catch((err) => console.error(err));
  }

  // we add an extra layer of filtering
  // because the api results are not entirely accurate
  // so we fetch it to get a smaller list 
  // and then we filter that list down to only 
  // the relevant results
  const filteredPlayers = players.slice(0, 10).filter(player => player.first_name.toLowerCase().includes(search.toLowerCase()) || player.last_name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <h2>NBA Player Stats</h2>
        <p>Type in player, press enter and select player</p>
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
        <div className='search-list'>
        {filteredPlayers.map(player => <p onClick={() => history.push(`/players/${player.id}`)}>{player.first_name} {player.last_name}</p>)}
        </div>
    </div>
  );
}

export default SearchForm;
