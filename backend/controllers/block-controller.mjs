import Block from '../classes/Block.mjs';

// Dummy data for testing...
const blockchain = { chain: [Block.genesis] };

export const createBlock = (req, res, next) => {
	const data = req.body;

	if (!(data instanceof Array))
		return next(
			new Error(
				'An error occurred when handling the data. The data is an invalid payload...'
			)
		);

	const prevBlock = blockchain.chain.at(-1);
	const block = Block.mineBlock({ prevBlock, data });

	blockchain.chain.push(block);

	res.status(201).json({ data: block });
};
