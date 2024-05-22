import { createHash } from '../utils/cryptoLib.mjs';

class Transaction {
	constructor(sender, receiver, payload) {
		this.timestamp = Date.now();
		this.sender = sender;
		this.receiver = receiver;
		this.payload = payload;
		this.hash = createHash(
			this.timestamp,
			this.sender,
			this.receiver,
			this.stringifyPayload(this.payload)
		);
	}

	stringifyPayload(payload) {
		if (typeof payload !== "string") {
			return JSON.stringify(payload);
		}
		return payload;
	}

	get getTimestamp() {
		return this.timestamp;
	}

	get getSender() {
		return this.sender;
	}

	get getReceiver() {
		return this.receiver;
	}

	get getPayload() {
		return this.payload;
	}

	get getHash() {
		return this.hash;
	}
}

export default Transaction;
