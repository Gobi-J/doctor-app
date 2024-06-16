import express from 'express'
import { authenticate, restrict } from "../auth/verifyToken.js";
import { getCheckoutSession } from "../controllers/bookingController.js";

const router = express.Router();
router.post('/checkout-session/:doctorId',authenticate, getCheckoutSession)

export default router