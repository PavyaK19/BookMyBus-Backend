const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret"); // Use your JWT secret key
    req.user = decoded; // Attach user details to request object
    next(); // Proceed to next middleware
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = authenticate;
