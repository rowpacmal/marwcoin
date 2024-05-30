import { saveBlockchain } from "./blockchainIO.mjs";
import { blockchain } from "./startup.mjs";

const handleProcessExit = (blockchain) => {
    console.log("Process terminated. Saving blockchain...");
    saveBlockchain(blockchain);
    process.exit(0);
};

process.on("SIGINT", () => handleProcessExit(blockchain));
process.on("SIGTERM", () => handleProcessExit(blockchain));
