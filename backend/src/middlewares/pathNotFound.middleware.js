module.exports = (req, res, next) => {
    res.formatResponse(`Path ${req.originalUrl} not found`, 404);
}