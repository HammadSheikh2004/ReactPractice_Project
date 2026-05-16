import jwt from "jsonwebtoken"

const protect = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token || !token.startWith('Bearer')) {
        return res.status(401).json({ errorMessage: "Not Authorized" });
    }
    try {
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECREATE);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ errorMessage: "Token failed" });
    }
}

export default protect;