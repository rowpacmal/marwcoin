import { createHash } from '../utils/crypto-lib.mjs';
import genesisBlock from '../utils/genesisBlock.mjs';

const Block = class {
	constructor({ index, timestamp, prevHash, hash, data, nonce, difficulty }) {
		this.index = index;
		this.timestamp = timestamp;
		this.prevHash = prevHash;
		this.hash = hash;
		this.data = data;
		this.nonce = nonce;
		this.difficulty = difficulty;
	}

	static get genesis() {
		return new this(genesisBlock);
	}

	static mineBlock({ prevBlock, data }) {
		const index = +prevBlock.index + 1;
		const prevHash = prevBlock.hash;

		let { difficulty } = prevBlock;
		let timestamp, hash;
		let nonce = 1024;

		do {
			timestamp = Date.now();
			nonce++;
			hash = createHash(index, timestamp, prevHash, data, nonce, difficulty);
		} while (!hash.startsWith('0'.repeat(difficulty)));

		return new this({
			index,
			timestamp,
			prevHash,
			hash,
			data,
			nonce,
			difficulty,
		});
	}
};
