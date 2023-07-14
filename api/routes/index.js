const router = require('express').Router();
const auth = require('./auth')
const users = require('./users');
const posts = require('./posts');
const category = require('./category');


router.use("/auth",auth);
router.use("/users",users);
router.use("/posts",posts);
router.use("/category",category);

module.exports = router;