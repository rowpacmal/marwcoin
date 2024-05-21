import express from 'express';
import {
	createBlock,
	getBlockByIndex,
	getLatestBlock,
} from '../controllers/block-controller.mjs';

const blockRouter = express.Router();

blockRouter.route('/mine').post(createBlock);
blockRouter.route('/latest').get(getLatestBlock);
blockRouter.route('/:index').get(getBlockByIndex);

export default blockRouter;
