const router = require('express').Router();
const usersController = require('../controller/users');

router.put("/:id",usersController.update);

router.delete("/:id", usersController.delete);

router.get("/:id", usersController.get);

module.exports = router;