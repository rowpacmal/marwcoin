import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import blockchainRouter from './routers/blockchain-routes.mjs';
import transactionRouter from './routers/transaction-routes.mjs';
import blockRouter from './routers/block-routes.mjs';
import errorHandler from './middlewares/errorHandler.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use('/api/v1/blockchain', blockchainRouter);
app.use('/api/v1/transactions', transactionRouter);
app.use('/api/v1/blocks', blockRouter);

app.use(errorHandler);

app.listen(PORT, (err) => {
	err
		? console.error('Failed to run server..')
		: console.log(`Server running at port ${PORT}..`);
});
