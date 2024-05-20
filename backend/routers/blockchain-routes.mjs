import express from 'express';
import { listBlocks, addBlock, validateChain, addTransaction, mineTransactions } from '../controllers/blockchain-controller.mjs';

const router = express.Router();

router.route('/listBlocks').get(listBlocks);

router.route('/addBlock').post(addBlock);

router.route('/validateChain').get(validateChain);

router.route('/addTransaction').post(addTransaction);

router.route('/mineTransactions').get(mineTransactions);

export default router;