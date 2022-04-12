import { Router } from "express"
import userRouter from "./userRouter.js"
import financialRouter from "./financialRouter.js"

const router = Router()

router.use(userRouter)
router.use(financialRouter)

export default router