const express = require("express");
const api = require("./api");

const app = express();

app.use(express.static("website"));

app.use(express.json());
app.use("/api", api);

const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
