import * as userService from "../services/userService.js"

export async function SignUp(req, res) {
  await userService.SignUp(req.body)
  res.sendStatus(201);
}

export async function SignIn(req, res) {
  const token = await userService.SignIn(req.body)
  res.send({ token })
}