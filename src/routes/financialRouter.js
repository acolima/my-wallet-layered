import { Router } from "express"
import * as financialController from "../controllers/financialController.js"
import { schemaValidation } from "../middlewares/schemaValidationMiddleware.js"
import tokenValidation from "../middlewares/tokenValidationMiddleware.js"
import schemas from "../schemas/financialSchema.js"

const financialRouter = Router()

financialRouter.use(tokenValidation)
financialRouter.post("/financial-events", schemaValidation(schemas.financialEvent), financialController.insertEvent)
financialRouter.get("/financial-events", financialController.getEvents)
financialRouter.get("/financial-events/sum", financialController.calculateSum)

export default financialRouter