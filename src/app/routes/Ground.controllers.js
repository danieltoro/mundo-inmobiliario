/**
 * long description for the file
 *
 * @author      Daniel Toro <d.toro@outlook.com>
 * @project     mundo-terrenos
 *
 * Created at   : 2019-03-03 01:18
 *
 * Copyright (c) 2019
 */

const express = require('express');
const router = express.Router();

const groundController = require('../controllers/Ground.controller');

router.get('/', (req, res) => {
    res.send('index');
});

router.post('/', groundController.createGround);

module.exports = router;
