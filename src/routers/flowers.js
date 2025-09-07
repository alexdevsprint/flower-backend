import { Router } from "express";
import { getFlowersByShopController } from "../controllers/flowers.js";
const router = Router();

router.get("/", getFlowersByShopController);

export default router;
