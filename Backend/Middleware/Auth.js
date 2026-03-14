 const jwt = require("jsonwebtoken");
 const SECRET = "shhhhhhh";
const verifyAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided."
      });
    }
    const decoded = jwt.verify(token,SECRET);
    req.user = decoded;

    next();  

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};

module.exports = verifyAuth;