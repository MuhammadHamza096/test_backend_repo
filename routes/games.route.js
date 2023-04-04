let express = require("express");
let router = express.Router();
let gamesController=require("../controllers/games.controller");



router.get("/",gamesController.get);
router.post("/",gamesController.create);
router.put("/:id",gamesController.update);
router.delete("/:id",gamesController.delete);
module.exports={
    router
}