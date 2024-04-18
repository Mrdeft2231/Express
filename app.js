const express = require("express");
const path = require("path");
const mainRoute = require("./routes/main");
const gamesRoute = require("./routes/games");

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoute, gamesRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
})