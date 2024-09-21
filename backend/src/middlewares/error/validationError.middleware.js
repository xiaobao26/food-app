module.exports = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        res.formatResponse(error.message, 400);
        return;
    }
    next();
}