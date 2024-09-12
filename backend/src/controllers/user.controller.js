const UserModel = require('../models/user.model');

/***
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: Object
 *          required: 
 *              -userName
 *              -email
 *              -password
 *              -phoneNumber
 *          properties:
 *              id:
 *                  type: number
 *                  description: auto generated unique identifier
 *              userName:
 *                  type: string
 *              email: 
 *                  type: string
 *              password:
 *                  type: string
 *              phoneNumber:
 *                  type: string
 *          example:
 *              id: "66dff80c86418887206d615b"
 *              userName: "Xiaobao"
 *              email: "xiaobao.xue@outlook.com"
 *              password: "123456"
 *              phoneNumber: "0493497606"
 * 
 *      updateUser:
 *          type: object
 *          required: 
 *              - password
 *          properties:
 *              id:
 *                  type: string
 *                  description: User's unique identifier
 *              user:
 *                  type: string
 *                  description: Updated user detail
 *              
 *          example:
 *              id: "66dff80c86418887206d615b"
 *              password: "00000000"
 * 
 * 
 * 
 * 
 * 
 */  


/**
 * @swagger
 * /v1/users:
 *   get:
 *     summary: Get a list of all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 */
const getAllUsers = async (req, res, next) => {
    // pagination
    const pageSize = parseInt(req.query.pageSize) || 2; // 每页的记录数
    // last require recorded id
    const cursor = req.query.cursor;

    let query = {};
    if (cursor) {
        query._id = { $gt: cursor };
    }
    const users = await UserModel.find(query).limit(pageSize).exec();
    
    const nextCursor = users.length === pageSize ? users[users.length - 1]._id : null;
    // status code: 200 -> ok
    res.formatResponse(users, 200, { nextCursor });
};


/**
 * @swagger
 * /v1/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [User]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User with the given ID not found
 *       500:
 *         description: Internal server error
 */
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


/**
 * @swagger
 * /v1/users:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request, validation error
 *       500:
 *         description: Internal server error
 */
const addUser = async (req, res, next) => {
    const { userName, email, password, phoneNumber } = req.body;

    const user = new UserModel({userName, email, password, phoneNumber});
    await user.save();

    // status code: 201 -> create successful
    res.formatResponse(user, 201);
};



/**
 * @swagger
 * /v1/users/{id}:
 *   delete:
 *     summary: Delete an existing user
 *     tags: [User]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to delete
 *         schema: 
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully, no content returned
 *       404:
 *         description: Cannot find user with the given id
 *       500:
 *         description: Internal server error
 */

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


/**
 * @swagger
 * /v1/users/{id}:
 *   patch:
 *     summary: Update an existing user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Need user id to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateUser'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
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