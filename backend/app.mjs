import express from "express";
import helmet from "helmet";
import cors from "cors";
import Blockchain from './models/blockchain.mjs';
import Block from './models/block.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

const myBlockchain = new Blockchain();

const block1 = new Block(1, '02/01/2024', { amount: 4 });
myBlockchain.addBlock(block1);

const block2 = new Block(2, '03/01/2024', { amount: 8 });
myBlockchain.addBlock(block2);

console.log('Blockchain valid?', myBlockchain.isChainValid());
console.log(JSON.stringify(myBlockchain, null, 2));

app.get('/', (req, res) => {
  res.send('Hello, Blockchain!');
});

app.get('/blockchain', (req, res) => {
  res.json(myBlockchain);
});

app.post('/addBlock', (req, res) => {
  const { index, timestamp, transactions } = req.body;
  const newBlock = new Block(index, timestamp, transactions);
  myBlockchain.addBlock(newBlock);
  res.json({ message: 'Block added successfully', block: newBlock });
});

app.post('/registerNode', (req, res) => {
  const { address } = req.body;
  myBlockchain.registerNode(address);
  res.json({ message: 'Node registered successfully', nodes: [...myBlockchain.nodes] });
});

app.post('/replaceChain', (req, res) => {
  const { newChain } = req.body;
  const replaced = myBlockchain.replaceChain(newChain);
  res.json({ message: replaced ? 'Chain replaced successfully' : 'Failed to replace chain', chain: myBlockchain.chain });
});

app.listen(PORT, (err) => {
  err
    ? console.error("Failed to run server..")
    : console.log(`Server running at port ${PORT}..`);
});