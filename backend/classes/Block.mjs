import { createHash } from '../utils/cryptoLib.mjs';
import genesisBlock from '../utils/genesisBlock.mjs';

const Block = class {
	constructor(
		index,
		timestamp,
		prevHash,
		hash,
		transactions,
		nonce,
		difficulty
	) {
		this.index = index;
		this.timestamp = timestamp;
		this.prevHash = prevHash;
		this.hash = hash;
		this.transactions = transactions;
		this.nonce = nonce;
		this.difficulty = difficulty;
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
		} = genesisBlock;

		return new this(
			index,
			timestamp,
			prevHash,
			hash,
			transactions,
			nonce,
			difficulty
		);
	}

	static mineBlock(prevBlock, transactions) {
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
		} while (!hash.startsWith('0'.repeat(difficulty)));

		return new this(
			index,
			timestamp,
			prevHash,
			hash,
			transactions,
			nonce,
			difficulty
		);
	}

	// TODO: Need to implement difficulty level adjustment at a later time.
	// Right now the difficulty level is hardcode into the genesis block.
};

export default Block;
