const express = require("express");
const auth = require("../middleware/auth");
const bookCtrl = require("../controllers/book")
const multer = require("../middleware/multer-config");
const sharp = require("../middleware/sharp");
const router = express.Router();

router.get("/", bookCtrl.getAllBook);
router.get("/bestrating", bookCtrl.getBestRating);
router.get("/:id", bookCtrl.getOneBook);

router.post("/", auth, multer, sharp, bookCtrl.createBook);
router.post("/:id/rating", auth, bookCtrl.rateBook);

router.put("/:id", auth, multer, sharp, bookCtrl.modifyBook);

router.delete("/:id", auth, bookCtrl.deleteBook);

module.exports = router;