export function existentEmail() {
  return { type: "existent_email", message: "Email já cadastrado" }
}

export function incorrectLogin() {
  return { type: "incorrect_login", message: "Email e/ou senha incorretos" }
}

export function invalidToken() {
  return { type: "invalid_token", message: "Token is invalid" }
}