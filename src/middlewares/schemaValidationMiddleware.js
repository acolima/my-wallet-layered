export function schemaValidation(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body)

    if (validation.error)
      return res.status(422).send("Preencha os dados corretamente")

    next()
  }
}
