import jwt from 'jsonwebtoken';

// Middleware to protect routes requiring authentication
export const protect = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request object
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token, authorization denied' });
  }
};
