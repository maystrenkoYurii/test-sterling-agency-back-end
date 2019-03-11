var express = require('express');
var router = express.Router();

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

/* GET random listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ number: getRandomNumber(0, 100) }));
});

module.exports = router;
