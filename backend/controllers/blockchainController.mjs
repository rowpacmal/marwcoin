import { blockchain } from "../startup.mjs";
import {
    handleResponse,
    handleErrorResponse
} from "../utils/responseHandlers.mjs";

export const getPendingTransactions = (_, res) => {
    try {
        handleResponse(
            res,
            "Pending Transactions",
            200,
            blockchain.pendingTransactions
        );
    } catch {
        handleErrorResponse(next, "Failed to retrieve pending transactions");
    }
};

export const mineBlock = (req, res, next) => {
    try {
        const { minerAddress } = req.body;

        if (!minerAddress) {
            return handleErrorResponse(
                next,
                "Missing or invalid fields. Expect `minerAddress`",
                400
            );
        }

        const block = blockchain.minePendingTransactions(minerAddress);
        handleResponse(res, "Block created", 201, block);
    } catch {
        handleErrorResponse(next, "Failed to mine block");
    }
};

export const validateChain = (_, res, next) => {
    try {
        const isValid = blockchain.isChainValid();
        handleResponse(
            res,
            `Blockchain is${isValid ? "" : " not"} valid`,
            200,
            {
                isValid
            }
        );
    } catch {
        handleErrorResponse(next, "Failed to validate chain");
    }
};
