import Block from './block.mjs';
import Transaction from './transaction.mjs';

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block(0, '01/01/2024', [], '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    minePendingTransactions() {
        const rewardTransaction = new Transaction(null, 'miner-address', this.miningReward);
        this.pendingTransactions.push(rewardTransaction);

        const block = new Block(this.chain.length, Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock();

        this.chain.push(block);

        this.pendingTransactions = [];

        return block;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

export default Blockchain;
