const jwt = require('jsonwebtoken');

// const checkUser = (req, res, next) => {
//     console.log("Cookies received:", req.cookies); // ✅ Debugging

//     const token = req.cookies?.token; // ✅ Safe access (avoid crash)

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Unauthorized - No Token" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; 
//         req.user = { userid: decoded.id }; // ✅ Ensure `userid` is set properly// ✅ Now `req.user` is set correctly
//         next();
//     } catch (err) {
//         return res.status(403).json({ success: false, message: "Invalid Token" });
//     }
// };


//cookies in hosting only
//tokens for testing for now
const checkUser = (req, res, next) => {
    // Try cookies first
    let token = req.cookies?.token;

    // If no cookie, try Authorization header
    if (!token && req.headers.authorization) {
        const authHeader = req.headers.authorization;
        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        }
    }

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized - No Token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userid: decoded.id };
        next();
    } catch (err) {
        return res.status(403).json({ success: false, message: "Invalid Token" });
    }
};




module.exports = checkUser;