const express = require("express");
const {
  addDemoUser,
  deleteDemoUser,
  getAllDemoUsers,
} = require("../controllers/demoUserController");

const router = express.Router();

router.post("/add", addDemoUser);
router.delete("/delete/:id", deleteDemoUser);
router.get("/all", getAllDemoUsers);

module.exports = router;
