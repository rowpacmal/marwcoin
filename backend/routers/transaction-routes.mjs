import express from "express";
import {
    getTransactionByHash,
    getLatestTransaction,
    getTransactionsInBlock,
    createTransaction,
} from "../controllers/transactionsController.mjs";

const transactionRouter = express.Router();

transactionRouter
    .route("/")
    .get(getTransactionsInBlock)
    .post(createTransaction);

transactionRouter.route("/latest").get(getLatestTransaction);

transactionRouter.route("/:txHash").get(getTransactionByHash);

export default transactionRouter;
