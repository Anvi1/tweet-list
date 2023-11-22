const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/tweet-dashboard'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/tweet-dashboard/index.html'));
});

// Start the app on the Heroku port or 3000 if running locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
