// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const { getAllGames, deleteGame, addGameController } = require("../controllers/games");
// Получим игры из JSON-файла и отправим в ответ на запрос




gamesRouter.post("/games", addGameController)

gamesRouter.get("/games", getAllGames)
gamesRouter.delete("/games/:id", deleteGame);

module.exports = gamesRouter;