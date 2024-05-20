import express from 'express';
import { listBlocks } from '../controllers/blockchain-controller.mjs';

const router = express.Router();

router.route('/listBlocks').get(listBlocks);


export default router;
