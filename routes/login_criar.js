const express = require("express");
const fs = require("fs");
const router = express.Router();

const dadosLocais = JSON.parse(fs.readFileSync("dados.json"));

router.post("/login", (req, res) => {
    const { password } = req.body;

    if (!password) {
        res.status(422).send("Wrong credentials");
    }

    if (!password) {
        res.status(401).send("wrong credentials");
    }

    res.status(200).send("My full name is Kevyn lucca Vieira de Almeida. I want this job!");


});

module.exports = router;