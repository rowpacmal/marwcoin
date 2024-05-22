import { blockchain } from '../app.mjs';
import Transaction from '../classes/Transaction.mjs';
import ResponseData from '../classes/ResponseData.mjs';
import ErrorResponse from '../classes/ErrorResponse.mjs';

export const getTransactionByHash = (req, res, next) => {
	try {
		const { txHash } = req.params;

		const transaction =
			blockchain?.chain
				?.flatMap((block) => block.transactions)
				?.find((transaction) => transaction.hash === txHash) ?? null;

		if (!transaction) {
			return res
				.status(404)
				.json(new ResponseData('No transaction was found', 404));
		}

		res
			.status(200)
			.json(new ResponseData('Transaction found', 200, transaction));
	} catch (err) {
		next(new ErrorResponse('Internal Server Error', 500));
	}
};

export const getLatestTransaction = (_, res, next) => {
	try {
		const lastBlock = blockchain?.chain?.at(-1);
		const transaction = lastBlock?.transactions?.at(-1) ?? null;

		if (!transaction) {
			return res
				.status(404)
				.json(new ResponseData('No transaction was found', 404));
		}

		res
			.status(200)
			.json(new ResponseData('Transaction found', 200, transaction));
	} catch (err) {
		next(new ErrorResponse('Internal Server Error', 500));
	}
};

export const getTransactionsInBlock = (req, res, next) => {
	try {
		const { blockIndex } = req.query;

		const block = blockchain?.chain?.find(
			(block) => +block.index === +blockIndex
		);
		const transactions = block?.transactions ?? null;

		if (!transactions) {
			return res
				.status(404)
				.json(new ResponseData('No transactions were found', 404));
		}

		res
			.status(200)
			.json(new ResponseData('Transactions found', 200, transactions));
	} catch (err) {
		next(new ErrorResponse(err.message, 500));
	}
};

export const createTransaction = (req, res, next) => {
	try {
		const { sender, receiver, payload } = req.body;

		if (!sender || !receiver || !payload) {
			return res
				.status(400)
				.json(
					new ResponseData(
						'Missing or invalid fields. Expected `sender`, `receiver`, and `payload`',
						400
					)
				);
		}

		const transaction = new Transaction(sender, receiver, payload);
		// blockchain?.chain?.at(-1).transactions?.push(transaction);

		blockchain?.addTransaction(transaction);

		res
			.status(201)
			.json(new ResponseData('Transaction created', 201, transaction));
	} catch (err) {
		next(new ErrorResponse('Internal Server Error', 500));
	}
};
