import { Router } from 'express';
import shopsRouter from './shops.js';
import flowersRouter from './flowers.js';
import ordersRouter from './orders.js';

const router = Router();

router.use('/shops', shopsRouter);
router.use('/flowers', flowersRouter);
router.use('/orders', ordersRouter);

export default router;