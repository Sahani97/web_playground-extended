const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());


app.get('/', (req, res) => {
  res.send('Its working!');
});

// Neue Route für die Bear-Daten
app.get('/api/bears', async (req, res) => {
  const params = {
    action: 'parse',
    page: 'List_of_ursids',
    prop: 'wikitext',
    section: 3,
    format: 'json',
    origin: '*',
  };

  try {
    const response = await axios.get('https://en.wikipedia.org/w/api.php', { params });
    res.json(response.data); // Sende die Wikipedia-Daten als JSON zurück
  } catch (error) {
    console.error('Error fetching Bear data:', error);
    res.status(500).json({ error: 'Failed to fetch Bear data' });
  }
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
