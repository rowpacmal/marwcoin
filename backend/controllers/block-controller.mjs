import Block from '../classes/Block.mjs';

// Dummy data for testing...
const blockchain = { chain: [Block.genesis] };

export const getBlockByIndex = (req, res, next) => {
	const block = blockchain.chain.find((b) => b.index === req.params.index);

	if (!block) {
		// for testing purposes
		res.status(404).json({
			error:
				'An error occurred when searching for the block. There is no block with that index...',
		});
		return;

		// return next(
		// 	new Error(
		// 		'An error occurred when searching for the block. There is no block with that index...'
		// 	)
		// );
	}

	res.status(200).json({ data: block });
};

export const createBlock = (req, res, next) => {
	const data = req.body;

	if (!(data instanceof Array)) {
		// for testing purposes
		res.status(400).json({
			error:
				'An error occurred when handling the data. The data is an invalid payload...',
		});
		return;

		// return next(
		// 	new Error(
		// 		'An error occurred when handling the data. The data is an invalid payload...'
		// 	)
		// );
	}

	const prevBlock = blockchain.chain.at(-1);
	const block = Block.mineBlock({ prevBlock, data });

	blockchain.chain.push(block);

	res.status(201).json({ data: block });
};
