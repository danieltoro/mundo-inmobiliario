/**
 * long description for the file
 *
 * @author      Daniel Toro <d.toro@outlook.com>
 * @project     mundo-terrenos
 *
 * Created at   : 2019-03-03 01:56
 *
 * Copyright (c) 2019
 */

const Ground = require('../models/Ground.model');

module.exports = {
    createGround: async (req, res) => {
        const { title } = req.body;

        const newGround = new Ground({
            title,
        });

        await newGround.save();

        return res.status(200).json(req.body);
    },
};
