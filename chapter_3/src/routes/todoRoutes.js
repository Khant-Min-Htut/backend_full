import express from "express";
import db from "../db.js";

const router = express.Router();

// GET all todos for logged-in user
router.get("/", (req, res) => {});

// CREATE a new todo
router.post("/", (req, res) => {});

// UPDATE a todo
router.put("/:id", (req, res) => {});

// DELETE a todo
router.delete("/:id", (req, res) => {});

export default router;
