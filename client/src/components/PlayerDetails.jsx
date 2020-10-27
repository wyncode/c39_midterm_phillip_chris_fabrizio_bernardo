import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
  const [player, setPlayer] = useState(null);
  const [stats, setStats] = useState(null);
  const [year, setYear] = useState(2019);
  const [image, setImage] = useState(null);

  const { id } = useParams();
  const apiURL = `https://www.balldontlie.io/api/v1/players/${id}`;
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlayer(data);
      })
      .catch((err) => console.error(err));
  }, [apiURL, id]);

  useEffect(() => {
    id &&
      year &&
      fetch(
        `https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setStats(data);
        })
        .catch((err) => console.error(err));
  }, [year, id]);

  useEffect(() => {
    fetch(
      `https://nba-players.herokuapp.com/players/${player?.last_name}/${player?.first_name}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('trig');

        console.log(data);
        setImage(data);
      })
      .catch((err) => console.error(err));
  }, [player]);

  const years = [2015, 2016, 2017, 2018, 2019];
  return (
    <div>
      <div>
        <img src={image} alt="best players" />
      </div>
      <h1>
        {player?.first_name} {player?.last_name}
      </h1>

      <select name="year" onChange={(e) => setYear(e.target.value)}>
        {years.reverse().map((year) => {
          return (
            <option key={year} value={`${year}`}>
              {year}
            </option>
          );
        })}
      </select>

      <table>
        <thead>
        <tr>
          <th>Games</th>
          <th>Season</th>
          <th>min</th>
          <th>fgm</th>
          <th>fga</th>
          <th>fg3m</th>
          <th>fg3a</th>
          <th>ftm</th>
          <th>fta</th>
          <th>dreb</th>
          <th>reb</th>
          <th>ast</th>
          <th>stl</th>
          <th>blk</th>
          <th>turnover</th>
          <th>pf</th>
          <th>pts</th>
          <th>fg_pct</th>
          <th>fg3_pct</th>
          <th>ft_pct</th>
        </tr>
        </thead>
        <tbody>
        {stats?.data.map((stat) => {
          return (
            <tr key={stat.id}>
              <td>{stat.games_played}</td>
              <td>{stat.season}</td>
              <td>{stat.min}</td>
              <td>{stat.fgm}</td>
              <td>{stat.fga}</td>
              <td>{stat.fg3m}</td>
              <td>{stat.fg3a}</td>
              <td>{stat.ftm}</td>
              <td>{stat.fta}</td>
              <td>{stat.dreb}</td>
              <td>{stat.reb}</td>
              <td>{stat.ast}</td>
              <td>{stat.stl}</td>
              <td>{stat.blk}</td>
              <td>{stat.turnover}</td>
              <td>{stat.pf}</td>
              <td>{stat.pts}</td>
              <td>{stat.fg_pct}</td>
              <td>{stat.fg3_pct}</td>
              <td>{stat.ft_pct}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerDetails;
