import Block from "./Block.mjs";
import Transaction from "./Transaction.mjs";
import Currency from "./Currency.mjs";

class Blockchain {
    constructor() {
        this.chain = [Block.getGenesis];
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    get getLatestBlock() {
        return this.chain.at(-1);
    }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    minePendingTransactions(minerAddress) {
        const rewardTransaction = new Transaction(
            null,
            minerAddress,
            new Currency(this.miningReward)
        );

        this.pendingTransactions.push(rewardTransaction);

        const block = Block.mineBlock(
            this.getLatestBlock,
            this.pendingTransactions,
            {
                address: minerAddress,
                reward: this.miningReward
            }
        );

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

            if (currentBlock.prevHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

export default Blockchain;
