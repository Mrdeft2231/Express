const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");
const gamesRoute = require("./routes/games");
const cors = require("./middlewares/cors");
const connectToDatabase = require("./database/connect");

const PORT = 3000;

const app = express();

connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRoute,
)


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
})