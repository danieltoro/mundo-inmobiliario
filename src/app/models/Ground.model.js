/**
 * long description for the file
 *
 * @author      Daniel Toro <d.toro@outlook.com>
 * @project     mundo-terrenos
 *
 * Created at   : 2019-03-03 01:51
 *
 * Copyright (c) 2019
 */

/*
 * NPM Dependencies
 *
 * */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * Create a schema
 *
 * */
const GroundSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            trim: true,
            required: [true, 'Text is required!'],
            minlength: [10, 'Text need to be longer!'],
        },
        price: {
            type: Number,
            required: true,
        },
        surface: {
            type: Number,
        },
        location: {},
        typeOfLand: {
            type: String,
            enum: [
                'Ganadero',
                'Agricola',
                'Forestal',
                'Comercial',
                'Industrial',
                'Parcela',
                'Sitio',
                'Minero',
                'Isla',
                'Inversion',
                'Viñedo',
            ],
        },
        photos: {},
    },
    { timestamps: true },
);

/*
 * Create and export a model
 *
 * */
module.exports = Ground = mongoose.model('Ground', GroundSchema);
