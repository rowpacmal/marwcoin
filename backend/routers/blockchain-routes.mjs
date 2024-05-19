import express from 'express';

import Blockchain from './models/blockchain.mjs';
import Block from './models/block.mjs';

const router = express.Router();

// TODO: Move the anonym functions to a new controller file named "blockchain-controller.mjs"
// and place it in the controllers folder.
// The anonym functions be turned into named functions that are exported, and then imported
// back to this file, called in their respective routing.

// This test code should be removed when done...
const myBlockchain = new Blockchain();

const block1 = new Block(1, '02/01/2024', { amount: 4 });
myBlockchain.addBlock(block1);

const block2 = new Block(2, '03/01/2024', { amount: 8 });
myBlockchain.addBlock(block2);

console.log('Blockchain valid?', myBlockchain.isChainValid());
console.log(JSON.stringify(myBlockchain, null, 2));
// Test code above...

router.route('/').get((req, res) => {
	res.send('Hello, Blockchain!');
});

router.route('/listBlocks').get((req, res) => {
	res.json(myBlockchain);
});

router.route('/addBlock').post((req, res) => {
	const { index, timestamp, transactions } = req.body;
	const newBlock = new Block(index, timestamp, transactions);
	myBlockchain.addBlock(newBlock);
	res.json({ message: 'Block added successfully', block: newBlock });
});

router.route('/registerNode').post((req, res) => {
	const { address } = req.body;
	myBlockchain.registerNode(address);
	res.json({
		message: 'Node registered successfully',
		nodes: [...myBlockchain.nodes],
	});
});

router.route('/replaceChain').post((req, res) => {
	const { newChain } = req.body;
	const replaced = myBlockchain.replaceChain(newChain);
	res.json({
		message: replaced
			? 'Chain replaced successfully'
			: 'Failed to replace chain',
		chain: myBlockchain.chain,
	});
});

export default router;
