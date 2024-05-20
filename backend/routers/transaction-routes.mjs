import express from 'express';
import Blockchain from '../models/blockchain.mjs';
import { 
    listTransactions, 
    addTransaction, 
    getTransaction, 
    deleteTransaction 
} from '../controllers/transactionsController.mjs';

const router = express.Router();

router.route('/listTransactions').get(listTransactions);

router.route('/addTransaction').post(addTransaction);

router.route('/getTransaction/:id').get(getTransaction);

router.route('/deleteTransaction/:id').delete(deleteTransaction);

export default router;