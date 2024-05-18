import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(errorHandler);

app.listen(PORT, (err) => {
  err
    ? console.error('Failed to run server..')
    : console.log(`Server running at port ${PORT}..`);
});
