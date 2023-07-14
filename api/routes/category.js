const router = require('express').Router();
const categoryController = require('../controller/category');

router.post("/",categoryController.create);

// router.put("/:id",categoryController.update);

// router.delete("/:id", categoryController.delete);

// router.get("/:id", categoryController.get);

  router.get("/", categoryController.getAll);

module.exports = router;