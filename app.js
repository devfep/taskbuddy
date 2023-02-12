const express = require("express");
const path = require("path");
const app = express();

const port = 9000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
