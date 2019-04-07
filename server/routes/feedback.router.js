const express = require('express');
const router = express.Router();

const feedback = [];



router.post('/', (req, res) => {
    let feedback = req.body();
    console.log(`adding feedback`, feedback);
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "Comments")
    VALUES ($1, $2, $3, $4);`;
 
    pool.query(sqlText, (feedback.feelings, feedback.understanding, feedback.support, feedback.comments))
       .then((response) => {
          res.sendStatus(201);
       }).catch((error) => {
          console.log('Failed to POST', error);
          res.sendStatus(500);
       });
 });

// router.get('/', (req, res) => {
//     res.send(feedback)
//     console.log('getting feedback');   
// })

module.exports = router;