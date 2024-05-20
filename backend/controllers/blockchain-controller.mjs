import ResponseData from '../classes/ResponseData.mjs';
import ErrorResponse from '../classes/ErrorResponse.mjs';
import Blockchain from '../models/blockchain.mjs';

const myBlockchain = new Blockchain();

export const listBlocks = (req, res) => {
    try {
        const blocks = myBlockchain.getBlocks();
        res.status(200).json(new ResponseData(blocks));
    } catch (error) {
        res.status(500).json(new ErrorResponse('Failed to list blocks', error));
    }
};


