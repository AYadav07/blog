const router = require('express').Router();
const categoryController = require('../controller/category');

router.post("/",categoryController.create);
router.get("/", categoryController.getAll);

module.exports = router;