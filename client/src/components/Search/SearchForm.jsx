import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './SearchForm.css';


function SearchForm () {
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

  console.log('players', players)


  return (
    <div className='MainPage'>
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
    </div>
  );
}

export default SearchForm;
