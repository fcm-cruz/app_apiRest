const path = require('path');
const express = require('express');
const app = express();

// This just lets you set an alternate port with an environment variable,
// if you want.
const PORT = process.env.PORT || 8000;

// Set your static folder before any request handlers.
app.use(express.static(path.resolve(__dirname, 'public')));

// Handles request to root only.
app.get('/', (req, res) => {

  // If you needed to modify the status code and content type, you would do so
  // using the Express API, like so. However, this isn't necessary here; Express
  // handles this automatically.
  res.status(200);
  res.type('text/html');

  // Use sendFile(absPath) rather than sendfile(path), which is deprecated.
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Call the listen() method on your app rather than using Node's http module.
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Listening on port ${PORT}`);
});