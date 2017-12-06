const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create)
  .delete(articleController.remove);

module.exports = router;
