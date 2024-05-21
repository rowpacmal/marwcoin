import { blockchain } from '../app.mjs';
// import Block from '../models/block.mjs';
// import Transaction from '../classes/Transaction.mjs';
import ResponseData from '../classes/ResponseData.mjs';
import ErrorResponse from '../classes/ErrorResponse.mjs';

// export function listBlocks(req, res, next) {
// 	res.json(new ResponseData(myBlockchain, 'Blocks listed successfully.'));
// }

export const getPendingTransactions = (req, res, next) => {
	res
		.status(200)
		.json(
			new ResponseData(
				'Pending Transactions',
				200,
				blockchain.pendingTransactions
			)
		);
};

export function mineBlock(req, res, next) {
	try {
		const { minerAddress } = req.body;

		if (!minerAddress) {
			return next(
				new ErrorResponse(
					'Missing or invalid fields. Expect `minerAddress`',
					400
				)
			);
		}

		const block = blockchain.minePendingTransactions(minerAddress);

		res.status(201).json(new ResponseData('Block created', 201, block));
	} catch (error) {
		res.status(500).json(new ErrorResponse(error.message));
	}
}

export function validateChain(req, res, next) {
	try {
		const isValid = blockchain.isChainValid();
		res.json(
			new ResponseData(
				{ isValid },
				`Blockchain is ${isValid ? '' : 'not '}valid.`
			)
		);
	} catch (error) {
		res.status(500).json(new ErrorResponse(error.message));
	}
}

// export function addTransaction(req, res) {
// 	try {
// 		const { from, to, amount } = req.body;
// 		const transaction = new Transaction(from, to, amount);
// 		myBlockchain.addTransaction(transaction);
// 		res.json(new ResponseData(transaction, 'Transaction added successfully.'));
// 	} catch (error) {
// 		res.status(500).json(new ErrorResponse(error.message));
// 	}
// }

// export function mineTransactions(req, res) {
// 	try {
// 		const newBlock = myBlockchain.minePendingTransactions();
// 		res.json(new ResponseData(newBlock, 'Block mined successfully.'));
// 	} catch (error) {
// 		res.status(500).json(new ErrorResponse('Mining failed'));
// 	}
// }
