const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();
