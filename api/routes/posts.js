const router = require('express').Router();
const postsController = require('../controller/posts');

router.post("/",postsController.create);

router.put("/:id",postsController.update);

router.delete("/:id", postsController.delete);

router.get("/:id", postsController.get);

router.get("/", postsController.getAll);

module.exports = router;