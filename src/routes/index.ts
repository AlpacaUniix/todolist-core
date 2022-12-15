import { Router } from 'express';
import { todoRouter } from './event';

const router = Router();

router.use('/', todoRouter);
export default router;