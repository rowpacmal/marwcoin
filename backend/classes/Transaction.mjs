import { createHash } from '../utils/crypto-lib.mjs';

class Transaction {
    constructor(sender, reciever, payload) {
        this.timestamp = Date.now();
        this.sender = sender;
        this.reciever = reciever;
        this.payload = typeof payload !== "string" 
            ? JSON.stringify(payload) 
            : payload;
        this.hash = createHash(this.timestamp, this.sender, this.reciever, this.payload);
    }
}

export default Transaction;