// const express = require("express");
import { Router } from "express";
import pool from "../db.js";
import bookSchema from "../schema/validationsSchema.js";
import { joiValidation } from "../middleware/validateMiddleware.js";


const router = Router();




//books_data
router.post("/createbooks", joiValidation(bookSchema.bookPost), async (req, res) => {
  try {
    const {
      book_id,
      title,
      author,
      author_id,
      genre,
      rating,
      description,
      isbn,
      status,
      people_requesting,
      release_date,
    } = req.body;
    const newData = await pool.query(
      "Insert Into books_data (book_id,title,author,author_id,genre,rating,description,isbn,status,people_requesting,release_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",
      [
        book_id,
        title,
        author,
        author_id,
        genre,
        rating,
        description,
        isbn,
        status,
        people_requesting,
        release_date,
      ]
    );

    res.json(newData);
  } catch (error) {
    console.error(error.message);
  }
});


router.patch("/updatebooks", joiValidation(bookSchema.bookPost), async (req, res) => {
  try {
    const {id} = req.body;
    const updatebooks = await pool.query(
      "UPDATE books_table SET title = $1 WHERE book_id = $2",
      [title, id]
    );


    res.json(updatebooks);
  } catch (error) {
    console.error(error.message);
  }
});




router.get("/books", async (req, res) => {
  try {
    // const { description } = req.body;
    const { rows } = await pool.query("Select * from books_data");   
    res.json(rows);
  } catch (error) {
    res.status(200).json({ error });
  }
});
router.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("Select * from books_data where book_id = $1;",[id]);   
    res.json(rows);
  } catch (error) {
    res.status(200).json({ error });
  }
});

//author_data

router.get("/authors", async (req, res) => {
  try {
    const { rows } = await pool.query("Select * from author_data");
    res.json(rows);
  } catch (error) {
    res.status(200).json({ error });
  }
});
//genre_data

router.get("/genre", async (req, res) => {
  try {
    const { rows } = await pool.query("Select * from genre_data");
    res.json(rows);
  } catch (error) {
    res.status(200).json({ error });
  }
});

//author_pen_names

router.get("/pennames", async (req, res) => {
  try {
    const { rows } = await pool.query("Select * from author_pen_names");
    res.json(rows);
  } catch (error) {
    res.status(200).json({ error });
  }
});

//book_issued_data

router.get("/booksissued", async (req, res) => {
  try {
    const { rows } = await pool.query("Select * from book_issued_data");
    res.json(rows);
  } catch (error) {
    res.status(200).json({ error });
  }
});

//user_status

router.get("/users", async (req, res) => {
  try {
    const { rows } = await pool.query("Select * from user_status");
    res.json(rows);
  } catch (error) {
    res.status(200).json({ error });
  }
});


router.get("/users", async (req, res) => {
  try {
    res.sendStatus(200)
  } catch (error) {
    res.status(200).json({ error });
  }
});




//DELETEREQ

router.delete("/bookdelete", async (req, res) => {
  try {
    const { id } = req.body;
    const deleteBook = await pool.query("DELETE FROM books_data WHERE book_id = ($1)", [
      id,
    ]);
    // res.json(deleteBook);
    res.json("Book was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//PATCH



//postgresql://postgres:Epm50fUme8Ob12qz7uD6@containers-us-west-182.railway.app:5656/railway

//  app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

export default router;
