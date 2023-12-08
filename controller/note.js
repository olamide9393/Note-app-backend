const Note = require("../model/note");

// create note
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const response = await Note.create({
      title,
      content,
    });
    res.json({ message: "your note has been added", response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all note
const getNote = async (req, res) => {
  try {
    const result = await Note.find();
    res.json({ status: 200, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single note
const getSingleNote = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Note.findById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update note
const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

// delete note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.json({ message: "deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createNote, getNote, updateNote, deleteNote, getSingleNote };
