const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const createLogger  = require('../utils/logger');

const logger = createLogger(__dirname);


const login = async (req, res, next) => {
    try {
        // defined and check input validation
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });
        const { email, password } = await loginSchema.validateAsync(req.body);

        // then find user by email in database
        const user = await User.findOne({ email });
        if (!user) {
            return res.formatResponse(`Cannot found user ${email}`, 404);
        }

        // if the email in database, then check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.formatResponse('Password incorrect, invalid credentials!', 401);
        }
        // if password match, create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ token, user: { id: user._id, email: user.email, name: user.name }});
    } catch (error) {
        logger.info(error.message);
        next(error);
    }
}

const register = async (req, res, next) => {
    // define register validation schema
    try {
        const registerSchema = Joi.object({
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
        // check input whether valid
        const { name, email, password, phoneNumber} = await registerSchema.validateAsync(req.body, {
            allowUnknown: true,
            stripUnknown: true,
        });
    
        // check if user exist in database
        // if exist return 400
        // else register successful
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.formatResponse(`User ${email} already exist!`, 400);
        }
        const newUser = new User({
            name,
            email,
            password,
            phoneNumber,
            provider: 'email',
        });
        await newUser.save();
        res.formatResponse(`user ${email} registered successful!`, 201);
    } catch (error) {
        logger.info(error.message);
        next(error);
    }
}

module.exports = {
    login,
    register,
}