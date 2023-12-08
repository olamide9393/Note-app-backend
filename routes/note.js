const express = require("express");
const { createNote, getNote, updateNote, getSingleNote, deleteNote } = require("../controller/note");
const router = express.Router();

router.post("/createNote", createNote)
router.get("/getNote", getNote)
router.post("/updateNote", updateNote)
router.get("/:id", getSingleNote)
router.delete("/deleteNote", deleteNote)
module.exports = router;