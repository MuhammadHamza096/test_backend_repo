let express = require("express");
let router = express.Router();
let userController=require("../controllers/users.controller");



router.get("/",userController.get);
router.post("/",userController.create);
router.put("/:id",userController.update);
router.delete("/:id",userController.delete);
module.exports={
    router
}