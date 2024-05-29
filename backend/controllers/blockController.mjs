import { blockchain } from "../startup.mjs";
import ErrorResponse from "../classes/ErrorResponse.mjs";
import ResponseData from "../classes/ResponseData.mjs";

const findBlock = (prop, param) => {
    return blockchain?.chain?.find((block) => block[prop] === param);
};

const sendResponse = (res, message, status, data) => {
    res.status(status).json(new ResponseData(message, status, data));
};

const handleNotFound = (next) => {
    next(new ErrorResponse("Block not found", 404));
};

const handleInternalError = (next, message) => {
    next(new ErrorResponse(message, 500));
};

export const getAllBlocks = (_, res, next) => {
    try {
        sendResponse(res, "Blocks found", 200, blockchain.chain);
    } catch (err) {
        handleInternalError(next, "Failed to retrieve blocks");
    }
};

export const getLatestBlock = (_, res, next) => {
    try {
        sendResponse(res, "Latest block found", 200, blockchain.getLatestBlock);
    } catch (err) {
        handleInternalError(next, "Failed to retrieve latest block");
    }
};

export const getBlockByIndex = (req, res, next) => {
    try {
        const { blockIndex } = req.params;
        const block = findBlock("index", +blockIndex);

        block
            ? sendResponse(res, "Block found", 200, block)
            : handleNotFound(next);
    } catch (err) {
        handleInternalError(next, "Failed to retrieve block by index");
    }
};

export const getBlockByHash = (req, res, next) => {
    try {
        const { blockHash } = req.params;
        const block = findBlock("hash", blockHash);

        block
            ? sendResponse(res, "Block found", 200, block)
            : handleNotFound(next);
    } catch (err) {
        handleInternalError(next, "Failed to retrieve block by hash");
    }
};
