import { Router } from 'express';
import { todoRouter } from './event';

const router = Router();

router.use('/task', todoRouter);
export default router;