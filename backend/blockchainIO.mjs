import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Blockchain from './classes/Blockchain.mjs';

// Configuration constants
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const DATA_DIRECTORY = 'data';
const BLOCKCHAIN_DATA_FILE = 'blockchain.json';

const blockchainDataFilePath = join(currentDirPath, DATA_DIRECTORY, BLOCKCHAIN_DATA_FILE);
const dataDirectoryPath = join(currentDirPath, DATA_DIRECTORY);

// Function to load the blockchain from the JSON file
export const loadBlockchain = () => {
    const blockchain = new Blockchain();

    if (fs.existsSync(blockchainDataFilePath)) {
        const data = fs.readFileSync(blockchainDataFilePath, 'utf8');
        Object.assign(blockchain, JSON.parse(data));
    }

    return blockchain;
};

// Function to save the blockchain to the JSON file
export const saveBlockchain = (blockchain) => {
    if (!fs.existsSync(dataDirectoryPath)) {
        fs.mkdirSync(dataDirectoryPath);
    }

    fs.writeFileSync(blockchainDataFilePath, JSON.stringify(blockchain, null, 2));
};
