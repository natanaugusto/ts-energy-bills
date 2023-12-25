import express, {
  type NextFunction,
  type Request,
  type Response
} from 'express'
import { HttpStatusCode } from '@/enums'

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void

const healthCheck: RequestHandler = (_req: Request, res: Response): void => {
  res.status(HttpStatusCode.NO_CONTENT).json()
}

const router = express.Router()
router.get('/health', healthCheck)

export default router
