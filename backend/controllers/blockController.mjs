import { blockchain } from "../startup.mjs";
import {
    handleResponse,
    handleErrorResponse
} from "../utils/responseHandlers.mjs";

const findBlock = (prop, param) => {
    return blockchain?.chain?.find((block) => block[prop] === param);
};

export const getAllBlocks = (_, res, next) => {
    try {
        handleResponse(res, "Blocks found", 200, blockchain.chain);
    } catch {
        handleErrorResponse(next, "Failed to retrieve blocks");
    }
};

export const getLatestBlock = (_, res, next) => {
    try {
        handleResponse(
            res,
            "Latest block found",
            200,
            blockchain.getLatestBlock
        );
    } catch {
        handleErrorResponse(next, "Failed to retrieve latest block");
    }
};

export const getBlockByIndex = (req, res, next) => {
    try {
        const { blockIndex } = req.params;
        const block = findBlock("index", +blockIndex);

        block
            ? handleResponse(res, "Block found", 200, block)
            : handleErrorResponse(next, "Block not found", 404);
    } catch {
        handleErrorResponse(next, "Failed to retrieve block by index");
    }
};

export const getBlockByHash = (req, res, next) => {
    try {
        const { blockHash } = req.params;
        const block = findBlock("hash", blockHash);

        block
            ? handleResponse(res, "Block found", 200, block)
            : handleErrorResponse(next, "Block not found", 404);
    } catch {
        handleErrorResponse(next, "Failed to retrieve block by hash");
    }
};
