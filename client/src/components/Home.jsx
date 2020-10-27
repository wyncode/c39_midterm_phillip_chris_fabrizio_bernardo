import React, { useState, useEffect } from 'react';

function Home({ history }) {
  const [playerStats, setPlayerStats] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const apiURL = `https://www.balldontlie.io/api/v1/players?search=${search}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setPlayerStats(data.data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleClick = (id) => {
    history.push(`/players/${id}`);
  };

  return (
    <div className="ball">
      <input
        type="text"
        placeholder="Search Name & Last Name and click on the name below"
        onChange={(e) => setSearch(e.target.value)}
      />
      {playerStats
        .sort((a, b) => {
          return a.first_name > b.first_name
            ? 1
            : a.first_name < b.first_name
            ? -1
            : 0;
        })
        .map((player) => {
          return (
            <div onClick={() => handleClick(player.id)}>
              <h3>
                {player.first_name} {player.last_name}
              </h3>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
