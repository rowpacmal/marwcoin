import HttpClient from "../utils/httpClient.mjs";
import { API_BASE_URL } from "../utils/settings.mjs";

export const getPendingTransactions = async () => {
    const URL = `${API_BASE_URL}/api/v1/blockchain`;

    try {
        return await HttpClient.get(URL);
    } catch (error) {
        throw new Error(
            error.message || "Failed to fetch pending transactions",
        );
    }
};

export const mineBlock = async ({ minerAddress }) => {
    if (!minerAddress) {
        throw new Error("Miner address is required");
    }
    const URL = `${API_BASE_URL}/api/v1/blockchain/mine`;

    try {
        return await HttpClient.post(URL, { minerAddress });
    } catch (error) {
        throw new Error(error.message || "Failed to mine block");
    }
};

export const validateChain = async () => {
    const URL = `${API_BASE_URL}/api/v1/blockchain/validate`;

    try {
        return await HttpClient.get(URL);
    } catch (error) {
        throw new Error(error.message || "Failed to validate chain");
    }
};
