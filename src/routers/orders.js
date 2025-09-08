import { Router } from "express";
import { createOrdersController } from "../controllers/orders.js";

const router = Router();

router.post("/", createOrdersController);

export default router;
