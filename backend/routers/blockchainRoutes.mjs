import express from 'express';
import {
	getPendingTransactions,
	mineBlock,
	validateChain,
} from '../controllers/blockchainController.mjs';

const blockchainRouter = express.Router();

blockchainRouter.route('/').get(getPendingTransactions);
blockchainRouter.route('/validate').get(validateChain);
blockchainRouter.route('/mine').post(mineBlock);

export default blockchainRouter;
