if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

const encode = (data) => {
  let buf = Buffer.from(data);
  let base64 = buf.toString('base64');
  return base64;
};

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/photo/:lastName/:firstName', async (req, res) => {
  const { firstName, lastName } = req.params;

  console.log('hit!@');
  try {
    const { data } = await axios.get(
      `https://nba-players.herokuapp.com/players/${firstName}/${lastName}`
    );

    let image = 'data:image/jpeg;base64,' + encode(data);
    res.send(image);
  } catch (e) {
    res.json({ error: e.toString() });
  }
});
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
