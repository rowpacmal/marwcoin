import { blockchain } from "../startup.mjs";
import Transaction from "../classes/Transaction.mjs";
import Currency from "../classes/Currency.mjs";
import {
    handleResponse,
    handleErrorResponse
} from "../utils/responseHandlers.mjs";

export const getTransactionByHash = (req, res, next) => {
    try {
        const { txHash } = req.params;
        const transaction =
            blockchain?.chain
                ?.flatMap((block) => block.transactions)
                ?.find((transaction) => transaction.hash === txHash) ?? null;

        if (!transaction) {
            return handleErrorResponse(next, "No transaction was found", 404);
        }

        handleResponse(res, "Transaction found", 200, transaction);
    } catch {
        handleErrorResponse(next, "Failed to retrieve transaction by hash");
    }
};

export const getLatestTransaction = (_, res, next) => {
    try {
        const lastBlock = blockchain?.chain?.at(-1);
        const transaction = lastBlock?.transactions?.at(-1) ?? null;

        if (!transaction) {
            return handleErrorResponse(next, "No transaction was found", 404);
        }

        handleResponse(res, "Transaction found", 200, transaction);
    } catch {
        handleErrorResponse(next, "Failed to retrieve latest transaction");
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
            return handleErrorResponse(next, "No transactions were found", 404);
        }

        handleResponse(res, "Transactions found", 200, transactions);
    } catch {
        handleErrorResponse(next, "Failed to retrieve transactions from block");
    }
};

export const createTransaction = (req, res, next) => {
    try {
        const { sender, receiver, payload } = req.body;

        if (!sender || !receiver || !payload) {
            return handleErrorResponse(
                next,
                "Missing or invalid fields. Expected fields `sender`, `receiver`, and `payload`",
                400
            );
        }

        const transaction = new Transaction(
            sender,
            receiver,
            new Currency(+payload)
        );
        blockchain?.addTransaction(transaction);

        handleResponse(res, "Transaction created", 201, transaction);
    } catch {
        handleErrorResponse(next, "Failed to send transaction");
    }
};
