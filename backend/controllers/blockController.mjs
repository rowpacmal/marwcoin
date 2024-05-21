import { blockchain } from '../app.mjs';
// import Block from '../classes/Block.mjs';
import ErrorResponse from '../classes/ErrorResponse.mjs';
import ResponseData from '../classes/ResponseData.mjs';

const findBlock = (prop, param, next) => {
	const block = blockchain.chain.find((block) => block[prop] === param);

	if (!block) {
		return next(new ErrorResponse('No block was found', 404));
	}

	return block;
};

export const getAllBlocks = (req, res, next) => {
	res.status(200).json(new ResponseData('Blocks found', 200, blockchain.chain));
};

export const getLatestBlock = (req, res, next) => {
	res
		.status(200)
		.json(new ResponseData('Block found', 200, blockchain.getLatestBlock));
};

export const getBlockByIndex = (req, res, next) => {
	const { blockIndex } = req.params;
	const block = findBlock('index', +blockIndex, next);

	block && res.status(200).json(new ResponseData('Block found', 200, block));
};

export const getBlockByHash = (req, res, next) => {
	const { blockHash } = req.params;
	const block = findBlock('hash', blockHash, next);

	block && res.status(200).json(new ResponseData('Block found', 200, block));
};

// export const createBlock = (req, res, next) => {
// 	const data = req.body;

// 	if (!(data instanceof Array)) {
// 		return next(
// 			new ErrorResponse('Missing or invalid payload. Expect Array', 400)
// 		);
// 	}

// 	const block = Block.mineBlock(blockchain.getLatestBlock, data);

// 	blockchain.chain.push(block);

// 	res.status(201).json(new ResponseData('Block created', 201, block));
// };
