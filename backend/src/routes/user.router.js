const { Router } = require('express');
const { getAllUsers, addUser, getUserById, deleteUserById, updateUserById } = require('../controllers/user.controller');


const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', addUser);
userRouter.get('/:id', getUserById);
userRouter.delete('/:id', deleteUserById);
userRouter.patch('/:id', updateUserById);


module.exports = userRouter;

