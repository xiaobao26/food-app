const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const createLogger  = require('../utils/logger');

const logger = createLogger(__dirname);


const login = async (req, res, next) => {
    try {
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });

        const { email, password } = await loginSchema.validateAsync(req.body);
        console.log(password);

        const user = await User.findOne({ email });
        // if not this email in database
        if (!user) {
            return res.formatResponse(`Cannot find user ${email}!`, 404);
        }
        console.log(user.password)

        // if the email validate
        // check the password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.formatResponse(`Password incorrect, invalid credentials!`, 404);
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ token, user: { id: user._id, email: user.email, name: user.name } });

    } catch (e) {
        logger.info(e.message);
        next(e);
    }
}

const register = async (req, res, next) => {
    try {
        const saltRounds = 10;
        // Validate request body
        const registerSchema = Joi.object({
            name: Joi.string().alphanum().min(3).max(30).required().messages({
                'string.alphanum': 'name must only contain alphanumeric characters.',
                'string.min': 'name must be at least 3 characters long.',
                'string.max': 'name must be no more than 30 characters long.',
                'any.required': 'name is required.'
            }),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });
        const { name, email, password } = await registerSchema.validateAsync(req.body);

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword // Store the hashed password
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        logger.info(error.message);
        next(error);
    }
}

module.exports = {
    login,
    register,
}