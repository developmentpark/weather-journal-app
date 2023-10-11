import express from "express";
import { router as api } from "./api/index.js";
import morgan from "morgan";
import cors from "cors";
const app = express();

app.use(express.static("dist"));

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use("/api", api);

const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
