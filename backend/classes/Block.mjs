import { createHash } from "../utils/cryptoLib.mjs";
import genesisBlock from "../utils/genesisBlock.mjs";

class Block {
    constructor(
        index,
        timestamp,
        prevHash,
        hash,
        transactions,
        nonce,
        difficulty,
        miner
    ) {
        this.index = index;
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.transactions = transactions;
        this.nonce = nonce;
        this.difficulty = difficulty;

        this.status = true;
        this.miner = {
            address: miner.address,
            reward: miner.reward
        };
        this.size = JSON.stringify(transactions).length;
        this.gasUsed = (Math.random() * 1000000).toFixed(3);
        this.gasPrice = "0.0000000194";
    }

    static get getGenesis() {
        const {
            index,
            timestamp,
            prevHash,
            hash,
            transactions,
            nonce,
            difficulty,
            miner
        } = genesisBlock;

        return new this(
            index,
            timestamp,
            prevHash,
            hash,
            transactions,
            nonce,
            difficulty,
            miner
        );
    }

    static mineBlock(prevBlock, transactions, miner) {
        const index = +prevBlock.index + 1;
        const prevHash = prevBlock.hash;

        let { difficulty } = prevBlock;
        let timestamp, hash;
        let nonce = 1024;

        do {
            timestamp = Date.now();
            nonce++;
            hash = createHash(
                index,
                timestamp,
                prevHash,
                transactions,
                nonce,
                difficulty
            );
        } while (!hash.startsWith("0".repeat(difficulty)));

        return new this(
            index,
            timestamp,
            prevHash,
            hash,
            transactions,
            nonce,
            difficulty,
            miner
        );
    }

    // TODO: Need to implement difficulty level adjustment at a later time.
    // Right now the difficulty level is hardcode into the genesis block.
}

export default Block;
