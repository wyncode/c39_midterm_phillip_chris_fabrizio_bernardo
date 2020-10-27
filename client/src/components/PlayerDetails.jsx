import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlayerDetails.css';

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
  const url = `https://nba-players.herokuapp.com/players/${player?.last_name}/${player?.first_name}`;
  player?.last_name &&
    fetch(url)
      .then((response) => response.blob())
      .then(function (myBlob) {
        const objectURL = URL.createObjectURL(myBlob);
        setImage(objectURL);
      })
      .catch((err) => console.error(err));
}, [player]);


  const years = [2015, 2016, 2017, 2018, 2019];
  return (
    <div className='PlayerPage'>
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
          <th>Season</th>
          <th>Games</th>
          <th>PTS</th>
          <th>Minutes</th>
          <th>FGM</th>
          <th>FGA</th>
          <th>FG%</th>
          <th>3PM</th>
          <th>3PA</th>
          <th>3P%</th>
          <th>FTM</th>
          <th>FTA</th>
          <th>FT%</th>
          <th>DREB</th>
          <th>REB</th>
          <th>AST</th>
          <th>STL</th>
          <th>BLK</th>
          <th>TOV</th>
          <th>PF</th>
        </tr>
        </thead>
        <tbody>
        {stats?.data.map((stat) => {
          return (
            <tr key={stat.id}>
              <td>{stat.season}</td>
              <td>{stat.games_played}</td>
              <td>{stat.pts}</td>
              <td>{stat.min}</td>
              <td>{stat.fgm}</td>
              <td>{stat.fga}</td>
              <td>{Math.round(stat.fg_pct * 100)}%</td>
              <td>{stat.fg3m}</td>
              <td>{stat.fg3a}</td>
              <td>{Math.round(stat.fg3_pct * 100)}%</td>
              <td>{stat.ftm}</td>
              <td>{stat.fta}</td>
              <td>{Math.round(stat.ft_pct * 100)}%</td>
              <td>{stat.dreb}</td>
              <td>{stat.reb}</td>
              <td>{stat.ast}</td>
              <td>{stat.stl}</td>
              <td>{stat.blk}</td>
              <td>{stat.turnover}</td>
              <td>{stat.pf}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerDetails;
