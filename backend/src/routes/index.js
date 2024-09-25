const { Router } = require('express');
const userRouter = require('./user.router');
const authRouter = require('./auth.router');

const v1Router = Router();


v1Router.use('/users', userRouter);
v1Router.use('/auth', authRouter);

module.exports = v1Router;