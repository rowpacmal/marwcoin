import { blockchain } from '../startup.mjs';
import ResponseData from '../classes/ResponseData.mjs';
import ErrorResponse from '../classes/ErrorResponse.mjs';

const sendResponse = (res, message, status, data = null) => {
    res.status(status).json(new ResponseData(message, status, data));
};

const handleErrorResponse = (next, message, status = 500) => {
    next(new ErrorResponse(message, status));
};

export const getPendingTransactions = (_, res) => {
    sendResponse(res, 'Pending Transactions', 200, blockchain.pendingTransactions);
};

export const mineBlock = (req, res, next) => {
    try {
        const { minerAddress } = req.body;

        if (!minerAddress) {
            return handleErrorResponse(next, 'Missing or invalid fields. Expect `minerAddress`', 400);
        }

        const block = blockchain.minePendingTransactions(minerAddress);
        sendResponse(res, 'Block created', 201, block);
    } catch (error) {
        handleErrorResponse(next, error.message);
    }
};

export const validateChain = (_, res, next) => {
    try {
        const isValid = blockchain.isChainValid();
        sendResponse(res, `Blockchain is${isValid ? '' : ' not'} valid.`, 200, { isValid });
    } catch (error) {
        handleErrorResponse(next, error.message);
    }
};
