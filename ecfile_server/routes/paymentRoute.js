import express from 'express'
import { initiatePayment } from '../controllers/paymentController.js';

const router = express.Router()

router.post('/',initiatePayment)

export default router;