const UserModel = require('../models/user.model');


const getAllUsers = async (req, res, next) => {
    const users = await UserModel.find().exec();
    
    // status code: 200 -> ok
    res.formatResponse(users);
};

const getUserById = async (req, res, next) => {
    const id = req.params.id;
    const user = await UserModel.findById(id).exec();

    if (!user) {
        res.formatResponse(`Cannot find user ${id}!`, 404);
        return;
    }
    // status code: 200 -> ok
    res.formatResponse(user);
};

const addUser = async (req, res, next) => {
    const { userName, email, password, phoneNumber } = req.body;

    const user = new UserModel({userName, email, password, phoneNumber});
    await user.save();

    // status code: 201 -> create successful
    res.formatResponse(user, 201);
};

const deleteUserById = async (req, res, next) => {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id).exec();

    if (!user) {
        res.formatResponse(`Cannot find user ${id}!`, 404);
        return;
    }
    // status code: 204 -> content is empty;
    res.formatResponse('', 204);

};

const updateUserById = async (req, res, next) => {
    const id = req.params.id;
    const { userName, email, password, phoneNumber } = req.body;

    // if NOT add { new: true }, the response send original value not the update value, second time response is the update value 
    const user = await UserModel.findByIdAndUpdate(id, { userName, email, password, phoneNumber }, { new: true });

    if (!user) {
        res.formatResponse(`Cannot find user ${id}!`, 404);
    }
    // status code: 200 -> ok
    res.formatResponse(user);
};


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUserById,
}