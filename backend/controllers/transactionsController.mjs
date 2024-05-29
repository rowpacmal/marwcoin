import { blockchain } from "../startup.mjs";
import Transaction from "../classes/Transaction.mjs";
import ResponseData from "../classes/ResponseData.mjs";
import ErrorResponse from "../classes/ErrorResponse.mjs";
import Currency from "../classes/Currency.mjs";

const sendResponse = (res, message, status, data = null) => {
    res.status(status).json(new ResponseData(message, status, data));
};

const handleInternalError = (next, message = "Internal Server Error") => {
    next(new ErrorResponse(message, 500));
};

export const getTransactionByHash = (req, res, next) => {
    try {
        const { txHash } = req.params;
        const transaction =
            blockchain?.chain
                ?.flatMap((block) => block.transactions)
                ?.find((transaction) => transaction.hash === txHash) ?? null;

        if (!transaction) {
            return sendResponse(res, "No transaction was found", 404);
        }

        sendResponse(res, "Transaction found", 200, transaction);
    } catch (err) {
        handleInternalError(next);
    }
};

export const getLatestTransaction = (_, res, next) => {
    try {
        const lastBlock = blockchain?.chain?.at(-1);
        const transaction = lastBlock?.transactions?.at(-1) ?? null;

        if (!transaction) {
            return sendResponse(res, "No transaction was found", 404);
        }

        sendResponse(res, "Transaction found", 200, transaction);
    } catch (err) {
        handleInternalError(next);
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
            return sendResponse(res, "No transactions were found", 404);
        }

        sendResponse(res, "Transactions found", 200, transactions);
    } catch (err) {
        handleInternalError(next, err.message);
    }
};

export const createTransaction = (req, res, next) => {
    try {
        const { sender, receiver, payload } = req.body;

        if (!sender || !receiver || !payload) {
            return sendResponse(
                res,
                "Missing or invalid fields. Expected `sender`, `receiver`, and `payload`",
                400
            );
        }

        const transaction = new Transaction(
            sender,
            receiver,
            new Currency(+payload)
        );
        blockchain?.addTransaction(transaction);

        sendResponse(res, "Transaction created", 201, transaction);
    } catch (err) {
        handleInternalError(next);
    }
};
