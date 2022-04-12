import joi from "joi"

const signUp = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required()
})

const signIn = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
})

const schemas = {
  signIn,
  signUp
}

export default schemas