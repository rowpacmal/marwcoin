import { blockchain } from '../app.mjs';
import Block from '../classes/Block.mjs';
import ErrorResponse from '../classes/ErrorResponse.mjs';
import ResponseData from '../classes/ResponseData.mjs';

export const getBlockByIndex = (req, res, next) => {
	const index = +req.params.index;
	const block = blockchain.chain.find((b) => b.index === index);

	if (!block) {
		return next(
			new ErrorResponse(
				`An error occurred when searching for the block. There is no block with the index ${index}...`,
				404
			)
		);
	}

	res
		.status(200)
		.json(
			new ResponseData(
				`Successfully find a block with the index ${index}.`,
				200,
				block
			)
		);
};

export const getLatestBlock = (req, res, next) => {
	const block = blockchain.chain.at(-1);

	res
		.status(200)
		.json(new ResponseData('Successfully find the latest block.', 200, block));
};

export const createBlock = (req, res, next) => {
	const data = req.body;

	if (!(data instanceof Array)) {
		return next(
			new ErrorResponse(
				'An error occurred when handling the data. The data is an invalid payload...',
				400
			)
		);
	}

	const prevBlock = blockchain.chain.at(-1);
	const block = Block.mineBlock({ prevBlock, data });

	blockchain.chain.push(block);

	res
		.status(201)
		.json(new ResponseData('Successfully mined a block.', 201, block));
};
