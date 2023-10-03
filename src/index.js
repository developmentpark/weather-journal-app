const express = require("express");

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
