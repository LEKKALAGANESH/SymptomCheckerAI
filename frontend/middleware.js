const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    try {
        let token = req.header('Authentication');
        if (!token) {
            return res.status(401).send({ message: 'Access denied. No token provided.' });
        }
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(500).send({ message: 'Invalid token' });
    }
}