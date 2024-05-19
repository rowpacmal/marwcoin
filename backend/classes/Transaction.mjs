import { createHash } from '../utils/crypto-lib.mjs';

class Transaction {
    constructor(sender, receiver, payload) {
        this.timestamp = Date.now();
        this.sender = sender;
        this.receiver = receiver;
        this.payload = typeof payload !== "string" 
            ? JSON.stringify(payload) 
            : payload;
        this.hash = createHash(this.timestamp, this.sender, this.receiver, this.payload);
    }

    get timestamp() {
        return this.timestamp;
    }

    get sender() {
        return this.sender;
    }

    get receiver() {
        return this.receiver;
    }

    get payload() {
        return this.payload;
    }

    get hash() {
        return this.hash;
    }
}

export default Transaction;