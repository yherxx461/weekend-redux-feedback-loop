const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
  console.log('POST ROUTER');
  console.log(req.body);

  let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

  const sqlValues = [
    req.body.feelingResponse,
    req.body.understandingResponse,
    req.body.supportResponse,
    req.body.commentsResponse,
  ];
  pool
    .query(sqlText, sqlValues)
    .then((result) => {
      //SUCCESS
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('ERROR in POST ROUTE', error);
      res.sendStatus(500);
    });
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
  console.log('testing');
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
