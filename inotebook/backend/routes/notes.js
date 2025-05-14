const router = require("express").Router();
const Notes = require("../models/Notes");
const fetchUser = require("../middleware/fetchUser");
const express = require("express");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes, using getUser : login required
router.get("/fetch-all-notes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 2: Add notes(login req.)
router.post(
  "/add-note",
  fetchUser,
  [
    body("title", "Enter a valid name").isLength({ min: 3 }),
    body("description", "Enter a valid email").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //If there is error return bad request and errors
      const validationError = validationResult(req);
      if (!validationError.isEmpty()) {
        return res.status(400).json({ errors: validationError.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.status(200).send(saveNote);
    } catch (error) {
      res.status(500).send({ error });
    }
  }
);

//ROUTE 3: Update an existing note : login required
router.put("/update-note/:id", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const updatedFields = {};
    if (title) updatedFields.title = title;
    if (description) updatedFields.description = description;
    if (tag) updatedFields.tag = tag;

    const existingNote = await Notes.findById(req.params.id);
    if (!existingNote) return res.status(404).send("Not Found");

    if (existingNote.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");

    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 4: Delete note, using getUser : login required
router.delete("/delete-note/:id", fetchUser, async (req, res) => {
  try {
    const existingNote = await Notes.findById(req.params.id);
    if (!existingNote) return res.status(404).send("Not Found");

    if (existingNote.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");

    await Notes.findByIdAndDelete(req.params.id);

    res.status(200).json("Note has been deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
