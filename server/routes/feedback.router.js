const express = require('express');
const router = express.Router();

const feedback = [];



router.post('/', (req, res) => {
    let newFeedback = req.body;
    feedback.push(newFeedback);
    console.log('feedback are', feedback)
    res.sendStatus(201);
})

router.get('/', (req, res) => {
    res.send(feedback)
    console.log('getting feedback');   
})

module.exports = router;