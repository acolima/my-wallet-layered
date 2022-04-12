export default function errorHandlerMiddleware(error, req, res, next) {
  if (error.type === "existent_email")
    return res.status(409).send(error.message)
  else if (error.type === "incorrect_login")
    return res.status(401).send(error.message)
  else if (error.type === "invalid_token")
    return res.status(401).send(error.message)

  console.log(error)
  return res.sendStatus(500);
}
