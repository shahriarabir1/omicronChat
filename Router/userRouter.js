const express = require("express");
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../Controller/userController");

const router = express.Router();

router.get("/", getUser);
router.post("/", postUser);
router.put("/", putUser);
router.delete("/", deleteUser);

module.exports = router;
