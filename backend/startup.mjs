import { fileURLToPath } from 'url';
import path from 'path';
import Blockchain from './classes/Blockchain.mjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

global.__appdir = dirname;

export const blockchain = new Blockchain();