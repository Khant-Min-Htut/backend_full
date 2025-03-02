import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();

// Register a new user endpoint /auth/register
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  //encrypt the password
  const hashedPassword = bcrypt.hashSync(password, 8);
  console.log(hashedPassword);

  // savet the new user and hashed password to the db
  try {
    const insertUser = db.prepare(
      `INSERT INTO users(username, password) VALUES(?,?)`
    );
    const result = insertUser.run(username, hashedPassword);
    const defaultTodo = `Hello Add ur first todo`;
    const insertTodo = db.prepare(
      `INSERT INTO TODOS(user_id, task) VALUES(?,?)`
    );
    insertTodo.run(result.lastInsertRowid, defaultTodo);
    // create a token
    const token = jwt.sign(
      { id: result.lastInsertRowid },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    {
    }
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }

  res.sendStatus(201);
});

router.post("/login", (req, res) => {});

export default router;
