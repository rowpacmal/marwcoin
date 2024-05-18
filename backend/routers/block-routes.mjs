import express from 'express';
import {
	createBlock,
	getBlockByIndex,
} from '../controllers/block-controller.mjs';

const router = express.Router();

router.route('/mine').post(createBlock);
router.route('/:index').get(getBlockByIndex);

export default router;
