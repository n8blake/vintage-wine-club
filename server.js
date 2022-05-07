require('dotenv').config();
const express = require("express");
const cors = require('cors');
const compression = require('compression');
const path = require('path');

//const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(compression());
// Serve up static assets (usually on heroku)
app.use(express.static(__dirname + '/static'));
  app.get('/static/preview/', function(request, response) {
    response.sendFile(path.join( __dirname + '/static/og-thumb.png'));
  });
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + '/client/dist/client'));
  app.get('/*', function(request, response) {
    response.sendFile(path.join( __dirname + '/client/dist/client/index.html'));
  });
} else {
    const proxy = require('express-http-proxy')
    app.use('/', proxy('localhost:4200'))
}

// Add routes, both API and view
//app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});