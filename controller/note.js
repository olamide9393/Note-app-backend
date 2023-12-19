const Note = require("../model/note");

// create note
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const response = await Note.create({
      title,
      content,
      user: req.user.id,

    });
    res.json({ message: "your note has been added", response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get  note
const getNote = async (req, res) => {
  try {
    const message = await Note.find({ user: req.user.id });
    res.status(200).json({ message });
  } catch (error) {
    console.log(error); 
    res
      .status(500)
      .json({ message: "An error occurred while fetching user data." });
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
