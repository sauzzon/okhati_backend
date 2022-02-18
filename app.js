const express = require("express");
const app = express();

const port = 8000;

const startServer = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening to port ${port}!!!`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
