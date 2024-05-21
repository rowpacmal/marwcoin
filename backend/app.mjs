import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import blockchainRouter from './routers/blockchainRoutes.mjs';
import transactionRouter from './routers/transactionRoutes.mjs';
import blockRouter from './routers/blockRoutes.mjs';

import resourceNotFound from './utils/resourceNotFound.mjs';
import errorHandler from './middlewares/errorHandler.mjs';

import { fileURLToPath } from 'url';
import path from 'path';
import Blockchain from './classes/Blockchain.mjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

global.__appdir = dirname;

export const blockchain = new Blockchain();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use('/api/v1/blockchain', blockchainRouter);
app.use('/api/v1/transactions', transactionRouter);
app.use('/api/v1/blocks', blockRouter);

app.all('*', resourceNotFound);

app.use(errorHandler);

app.listen(PORT, (err) => {
	err
		? console.error('Failed to run server..')
		: console.log(`Server running at port ${PORT}..`);
});
