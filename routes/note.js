const express = require("express");
const { createNote, getNote, updateNote, getSingleNote, deleteNote } = require("../controller/note");
const VarifyToken = require("../middleware/VarifyToken");
const router = express.Router();

router.post("/createNote",VarifyToken, createNote)
router.get("/getNote",VarifyToken, getNote)
router.post("/updateNote",VarifyToken, updateNote)
router.get("/:id",VarifyToken, getSingleNote)
router.delete("/deleteNote",VarifyToken, deleteNote)
module.exports = router;