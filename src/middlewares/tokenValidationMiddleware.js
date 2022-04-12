import { invalidToken } from "../utils/errorUtils.js"
import jwt from "jsonwebtoken";

export default async function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    throw invalidToken()
  }

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.status(401).send("erro doido");
  }

  res.locals.user = user
  next();
}