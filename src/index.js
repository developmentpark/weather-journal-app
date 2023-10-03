const express = require("express");
const api = require("./api");
const morgan = require("morgan");

const app = express();

app.use(express.static("website"));

app.use(express.json());
app.use(morgan("combined"));
app.use("/api", api);

const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
