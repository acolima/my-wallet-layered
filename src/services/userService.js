import * as userRepository from "../repositories/userRepository.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { existentEmail, incorrectLogin } from "../utils/errorUtils.js"

export async function SignUp({ name, email, password }) {
  const existingUsers = await userRepository.getUserByEmail(email)

  if (existingUsers.rowCount > 0)
    throw existentEmail()

  const hashedPassword = bcrypt.hashSync(password, 12)

  await userRepository.insertUser(name, email, hashedPassword)
}

export async function SignIn({ email, password }) {
  const { rows } = await userRepository.getUserByEmail(email)
  const [user] = rows;

  if (!user || !bcrypt.compareSync(password, user.password))
    throw incorrectLogin()

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)

  return token
}