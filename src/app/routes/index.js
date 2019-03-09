/*
 *** API Routes file ***
 */
// const userRoutes = require('./userApi');
// const postRoutes = require('./Post.routes');
const groundRoutes = require('./Ground.controllers');

module.exports = app => {
    //app.use('/api/user', userRoutes);
    // app.use('/api/post', postRoutes);
    app.use('/', groundRoutes);
};
