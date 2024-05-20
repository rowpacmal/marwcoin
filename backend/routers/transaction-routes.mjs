import express from 'express';
import Blockchain from '../models/blockchain.mjs';
import Transaction from '../models/transaction.mjs';

const router = express.Router();
const myBlockchain = new Blockchain();


router.route('/listTransactions').get((req, res) => {
    res.json(myBlockchain.pendingTransactions);
});


router.route('/addTransaction').post((req, res) => {
    const { from, to, amount } = req.body;
    const transaction = new Transaction(from, to, amount);
    myBlockchain.addTransaction(transaction);
    res.json({ message: 'Transaction added successfully', transaction });
});


router.route('/getTransaction/:id').get((req, res) => {
    const transaction = myBlockchain.pendingTransactions.find((txn, index) => index === parseInt(req.params.id));
    if (transaction) {
        res.json(transaction);
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});


router.route('/deleteTransaction/:id').delete((req, res) => {
    const transactionIndex = myBlockchain.pendingTransactions.findIndex((txn, index) => index === parseInt(req.params.id));
    if (transactionIndex > -1) {
        myBlockchain.pendingTransactions.splice(transactionIndex, 1);
        res.json({ message: 'Transaction deleted successfully' });
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});

export default router;