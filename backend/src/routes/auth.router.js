const { Router } = require('express');
const { login, register } = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', register);

module.exports = authRouter;


