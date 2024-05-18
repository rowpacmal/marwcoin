import Block from './block.mjs';

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
    this.nodes = new Set(); 
  }

  createGenesisBlock() {
    return new Block(0, '01/01/2024', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid(chain = this.chain) {
    for (let i = 1; i < chain.length; i++) {
      const currentBlock = chain[i];
      const previousBlock = chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }

  registerNode(address) {
    this.nodes.add(address);
  }

  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.log('Received chain is not longer than the current chain.');
      return false;
    } else if (!this.isChainValid(newChain)) {
      console.log('Received chain is invalid.');
      return false;
    }

    console.log('Replacing the current chain with the new chain.');
    this.chain = newChain;
    return true;
  }
}

export default Blockchain;