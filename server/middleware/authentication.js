import jwt from 'jsonwebtoken';
import { users } from '../models/users';

const auth = (req, res, next) => {
    const { token } = req.headers;
    console.log(token);
    if(!token) {
        return res.status(400).json({
            status: 400,
            message: 'Token not found'
        });
    }

    const verified = jwt.verify(token, 'titi');
    const { email } = verified;
    console.log(email);

    const user = users.find(us => us.email === email);

    if(!user) {
        return res.status(401).json({
            status: 401,
            message: "INVALID USER"
        });
    }
    console.log(token);
    console.log(user);

    req.user = user;
    next();
}

export default auth 