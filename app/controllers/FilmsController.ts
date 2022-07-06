const express = require("express");
const service = require("./FilmsService")
const router = express.Router();

router.get('/', (req, res) => {
    service.getAll().then((films) => {
        res.send(films);
    });
});

module.exports = router;