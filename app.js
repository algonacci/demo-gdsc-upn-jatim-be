const path = require("path");
const express = require("express");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");

const configuration = new GoogleGenerativeAI(process.env.API_KEY);
const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get("/", (req, res) => {
  // .........
});

app.get("/simple_gemini_api_request", (req, res) => {
  // .........
});

app.post("/simple_gemini_api_request", async (req, res) => {
  // .........
});

app.get("/streaming_request", (req, res) => {
  // .........
});

app.post("/streaming_request", async (req, res) => {
  // .........
});

app.get("/custom_needs", (req, res) => {
  // .........
});

app.post("/custom_needs", async (req, res) => {
  // .........
});

app.get("/project", (req, res) => {
  // .........
});

app.post("/project", async (req, res) => {});

module.exports = app;
