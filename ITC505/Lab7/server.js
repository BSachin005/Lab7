// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/ITC505/lab7', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/ITC505/lab7', (req, res) => {
  const { adjective, color, noun, verb, adverb } = req.body;

  // Replace this with your mad lib template
  const madLib = `The ${adjective} chased the ${color} ${noun} ${adverb} and ${verb} in the moonlight. The Coconino National Forest is a 1.856-million acre United States National Forest located in northern Arizona in the vicinity of Flagstaff, with elevations ranging from 2,600 feet to the highest point in Arizona at 12,633 feet.`;

  res.send(`
    <html>
      <head>
        <title>Mad Lib Result</title>
      </head>
      <body>
        <h2>Mad Lib Result:</h2>
        <p>${madLib}</p>
        <a href="/ITC505/lab7">Go back</a>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
