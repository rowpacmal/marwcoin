import { Blockchain } from '../app.mjs';
import Block from '../models/block.mjs';
import Transaction from '../classes/Transaction.mjs';
import ResponseData from '../classes/ResponseData.mjs';
import ErrorResponse from '../ErrorResponse.mjs';

export function listBlocks(req, res) {
    res.json(new ResponseData(myBlockchain, 'Blocks listed successfully.'));
}

export function addBlock(req, res) {
    try {
        const { index, timestamp, transactions } = req.body;
        const newBlock = new Block(index, timestamp, transactions);
        myBlockchain.addBlock(newBlock);
        res.json(new ResponseData(newBlock, 'Block added successfully.'));
    } catch (error) {
        res.status(500).json(new ErrorResponse(error.message));
    }
}

export function validateChain(req, res) {
    try {
        const isValid = myBlockchain.isChainValid();
        res.json(new ResponseData({ isValid }, `Blockchain is ${isValid ? '' : 'not '}valid.`));
    } catch (error) {
        res.status(500).json(new ErrorResponse(error.message));
    }
}

export function addTransaction(req, res) {
    try {
        const { from, to, amount } = req.body;
        const transaction = new Transaction(from, to, amount);
        myBlockchain.addTransaction(transaction);
        res.json(new ResponseData(transaction, 'Transaction added successfully.'));
    } catch (error) {
        res.status(500).json(new ErrorResponse(error.message));
    }
}

export function mineTransactions(req, res) {
    try {
        const newBlock = myBlockchain.minePendingTransactions();
        res.json(new ResponseData(newBlock, 'Block mined successfully.'));
    } catch (error) {
        res.status(500).json(new ErrorResponse('Mining failed'));
    }
}