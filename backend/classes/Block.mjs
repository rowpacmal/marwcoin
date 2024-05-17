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
};

export default Block;
