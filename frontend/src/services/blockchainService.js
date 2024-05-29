import HttpClient from '../utils/httpClient.mjs';

export const getPendingTransactions = async () => {
	const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blockchain`;

	try {
		return await HttpClient.get(URL);
	} catch (error) {
		throw new Error(error.message || 'Failed to fetch pending transactions');
	}
};

export const mineBlock = async ({ minerAddress }) => {
	if (!minerAddress) {
		throw new Error('Miner address is required');
	}
	const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blockchain/mine`;

	try {
		return await HttpClient.post(URL, { minerAddress });
	} catch (error) {
		throw new Error(error.message || 'Failed to mine block');
	}
};

export const validateChain = async () => {
	const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blockchain/validate`;

	try {
		return await HttpClient.get(URL);
	} catch (error) {
		throw new Error(error.message || 'Failed to validate chain');
	}
};
