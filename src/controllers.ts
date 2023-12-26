import express, {
  type NextFunction,
  type Request,
  type Response
} from 'express'
import { PrismaClient } from '@prisma/client'
import { HttpStatusCode } from '@/enums'

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void
const prisma = new PrismaClient()

const healthCheck: RequestHandler = (_req: Request, res: Response): void => {
  res.status(HttpStatusCode.NO_CONTENT).json()
}

const getAllData: RequestHandler = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const clients = await prisma.client.findMany({
    include: {
      bills: {
        include: {
          Consumptions: true
        }
      }
    }
  })
  res.json(clients)
}

const router = express.Router()
router.get('/health', healthCheck)
router.get('/all', getAllData)

export default router
