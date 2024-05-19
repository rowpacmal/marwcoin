import { blockchain } from '../app.mjs';
import Block from '../classes/Block.mjs';

export const getBlockByIndex = (req, res, next) => {
	const index = +req.params.index;
	const block = blockchain.chain.find((b) => b.index === index);

	if (!block) {
		res.status(404).json({
			error: `An error occurred when searching for the block. There is no block with the index ${index}...`,
		});
		return;
	}

	res.status(200).json({ data: block });
};

export const getLatestBlock = (req, res, next) => {
	const block = blockchain.chain.at(-1);

	res.status(200).json({ data: block });
};

export const createBlock = (req, res, next) => {
	const data = req.body;

	if (!(data instanceof Array)) {
		res.status(400).json({
			error:
				'An error occurred when handling the data. The data is an invalid payload...',
		});
		return;
	}

	const prevBlock = blockchain.chain.at(-1);
	const block = Block.mineBlock({ prevBlock, data });

	blockchain.chain.push(block);

	res.status(201).json({ data: block });
};
