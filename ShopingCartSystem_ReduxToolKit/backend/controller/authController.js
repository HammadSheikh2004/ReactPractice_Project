import User from "../models/User.js"
import tokenUtils from '../utilities/generateToken.js'
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ errorMessage: "Email Already Exist" });
        }
        const user = await User.create({ name, email, password });
        res.json({
            accessToken: tokenUtils.generateAccessToken(user),
            refreshToken: tokenUtils.generateRefreshToken(user),
            successMessage: "Registration Successfull!"
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        const comparedPassword = user.comparePassword(password);
        if (!user || !comparedPassword) {
            return res.status(401).json({ errorMessage: "Invalid Credentials" });
        };
        res.json({
            accessToken: tokenUtils.generateAccessToken(user),
            refreshToken: tokenUtils.generateRefreshToken(user),
            successMeaage: "Signin Successfull!"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export default { register, signin };