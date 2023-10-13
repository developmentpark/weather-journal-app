import express from "express";
import httpService from "../../utils/httpService.js";
import { objectToQuery } from "../../utils/query.js";
import projectData from "./data.js";

const router = express.Router();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_URL_BASE = process.env.WEATHER_URL_BASE;
const WEATHER_PATH = process.env.WEATHER_PATH;

router.get("/weather", async (req, res) => {
  const queries = objectToQuery(req.query);
  const url =
    WEATHER_URL_BASE + WEATHER_PATH + queries + `&appid=${WEATHER_API_KEY}`;
  try {
    const data = await httpService.get(url);
    res.json(data);
  } catch (error) {
    console.log("error: ", error);
  }
});

router.post("/", (req, res) => {
  const data = req.body;
  const item = { ...data, date: Date.now() };
  projectData.add(item);
  res.status(200).json(item);
});

router.get("/", (req, res) => {
  const data = projectData.getAll();
  res.json(data);
});

export { router };
