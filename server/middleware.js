import jwt from "jsonwebtoken";
import { jwtSecret } from "./controllers/user.js";


export function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {

    const user = jwt.verify(token, jwtSecret)
    req.user = user

  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  next();
}
