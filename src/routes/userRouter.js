import { Router } from "express"
import * as userController from "../controllers/userController.js"
import { schemaValidation } from "../middlewares/schemaValidationMiddleware.js"
import schemas from "../schemas/userSchema.js"

const userRouter = Router()

userRouter.post("/sign-up", schemaValidation(schemas.signUp), userController.SignUp)
userRouter.post("/sign-in", schemaValidation(schemas.signIn), userController.SignIn)

export default userRouter