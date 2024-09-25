const createLogger  = require('../utils/logger');
const UserModel = require('../models/user.model');
const Joi = require('joi');


const logger = createLogger(__dirname);
// curring function
// higher order function  (routeHandler -> is a function)
// const catchAll = (routeHandler) => {
//     return async (req, res, next) => {
//         try {
//             await routeHandler(req, res, next);
//         } catch(e) {
//             logger.info(e.message);
//             next(e);
//         }
//     }
// }
/***
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: Object
 *          required: 
 *              -name
 *              -email
 *              -password
 *              -phoneNumber
 *          properties:
 *              id:
 *                  type: number
 *                  description: auto generated unique identifier
 *              name:
 *                  type: string
 *              email: 
 *                  type: string
 *              password:
 *                  type: string
 *              phoneNumber:
 *                  type: string
 *          example:
 *              id: "66dff80c86418887206d615b"
 *              name: "Xiaobao"
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
    try {
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
    } catch (e) {
        logger.info(e.message);
        next(e);
    }

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
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id).exec();

        if (!user) {
            res.formatResponse(`Cannot find user ${id}!`, 404);
            return;
        }
        // status code: 200 -> ok
        res.formatResponse(user);
    } catch (e) {
        logger.info(e.message);
        next(e);
    }
    
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
    try {
        const schema = Joi.object({
            name: Joi.string().alphanum().min(3).max(30).required().messages({
                'string.alphanum': 'name must only contain alphanumeric characters.',
                'string.min': 'name must be at least 3 characters long.',
                'string.max': 'name must be no more than 30 characters long.',
                'any.required': 'name is required.'
            }),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
                'string.email': 'Enail must be a valid email address',
                'any.required': 'Email is required.'
            }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().messages({
                'string.pattern.base': 'Password must be between 8 and 30 characters and contain only letters and numbers.',
                'any.required': 'Password is required.'
            }),
            phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
                'string.pattern.base': 'Phone number must be a 10-digit number.',
                'any.required': 'Phone number is required.'
            })
        })
        const validatedBody = await schema.validateAsync(req.body, {
            allowUnknown: true,
            stripUnknown: true,
        });

        const user = new UserModel(validatedBody);
        await user.save();
    
        // status code: 201 -> create successful
        res.formatResponse(user, 201);
    } catch (e) {
        logger.info(e.message);
        next(e);
    }
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
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id).exec();
    
        if (!user) {
            res.formatResponse(`Cannot find user ${id}!`, 404);
            return;
        }
        // status code: 204 -> content is empty;
        res.formatResponse('', 204);
    } catch (e) {
        logger.info(e.message);
        next(e);
    }


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
    try {
        const id = req.params.id;
        const { name, email, password, phoneNumber } = req.body;
    
        // if NOT add { new: true }, the response send original value not the update value, second time response is the update value 
        const user = await UserModel.findByIdAndUpdate(id, { name, email, password, phoneNumber }, { new: true });
    
        if (!user) {
            res.formatResponse(`Cannot find user ${id}!`, 404);
        }
        // status code: 200 -> ok
        res.formatResponse(user);
    } catch (e) {
        logger.info(e.message);
        next(e);
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUserById,
}