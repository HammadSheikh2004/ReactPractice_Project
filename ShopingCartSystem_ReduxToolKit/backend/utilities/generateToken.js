import jwt from 'jsonwebtoken'

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECREATE,
        { expiresIn: '15m' }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: '7d' }
    )
}

export default { generateAccessToken, generateRefreshToken };