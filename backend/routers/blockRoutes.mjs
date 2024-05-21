import express from 'express';
import {
	getAllBlocks,
	getBlockByHash,
	getBlockByIndex,
	getLatestBlock,
} from '../controllers/blockController.mjs';

const blockRouter = express.Router();

blockRouter.route('/').get(getAllBlocks);
blockRouter.route('/latest').get(getLatestBlock);
blockRouter.route('/:blockIndex').get(getBlockByIndex);

blockRouter.route('/hash/:blockHash').get(getBlockByHash);

export default blockRouter;
