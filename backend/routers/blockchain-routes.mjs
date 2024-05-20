import express from 'express';
import Blockchain from '../models/blockchain.mjs';
import Block from '../models/block.mjs';
import Transaction from '../models/transaction.mjs';

const router = express.Router();
const myBlockchain = new Blockchain();

router.route('/listBlocks').get((req, res) => {
    res.json(myBlockchain);
});

router.route('/addBlock').post((req, res) => {
    const { index, timestamp, transactions } = req.body;
    const newBlock = new Block(index, timestamp, transactions);
    myBlockchain.addBlock(newBlock);
    res.json({ message: 'Block added successfully', block: newBlock });
});

router.route('/validateChain').get((req, res) => {
    const isValid = myBlockchain.isChainValid();
    res.json({ message: `Blockchain is ${isValid ? '' : 'not '}valid.` });
});

router.route('/addTransaction').post((req, res) => {
    const { from, to, amount } = req.body;
    const transaction = new Transaction(from, to, amount);
    myBlockchain.addTransaction(transaction);
    res.json({ message: 'Transaction added successfully', transaction });
});

router.route('/mineTransactions').get((req, res) => {
    const newBlock = myBlockchain.minePendingTransactions();
    if (newBlock) {
        res.json({ message: 'Block mined successfully', block: newBlock });
    } else {
        res.status(500).json({ message: 'Mining failed' });
    }
});

export default router;