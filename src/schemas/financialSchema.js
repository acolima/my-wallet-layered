import joi from "joi"

const financialEvent = joi.object({
  value: joi.string().min(0).required(),
  type: joi.string().valid("INCOME", "OUTCOME").required()
})

const schemas = {
  financialEvent
}

export default schemas