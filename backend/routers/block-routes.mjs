import express from 'express';
import { createBlock } from '../controllers/block-controller.mjs';

const router = express.Router();

router.route('/mine').post(createBlock);

export default router;
