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