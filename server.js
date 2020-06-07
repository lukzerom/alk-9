const express = require('express');
const http = require('http');;
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.Server(app)

app.use(cors())


app.get('/api', (req, res) => {
  res.json({
    status: 'Server works!'
  });
});

app.get('/api/posts', (req, res) => {
  res.json({
    posts: 'Posts!'
  });
});

// serve static react app
app.use('/', express.static(path.resolve(path.dirname(''), './client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.dirname(''), './client/build/index.html'));
});

httpServer.listen(PORT, () => console.warn(`Listening on port: ${PORT}`));