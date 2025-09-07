import { Router } from 'express';
import shopsRouter from './shops.js';
import flowersRouter from './flowers.js';

const router = Router();

router.use('/shops', shopsRouter);
router.use('/flowers', flowersRouter);

export default router;