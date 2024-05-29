import HttpClient from './httpClient.mjs';

export const fetchByHash = async (hash) => {
  if (!hash) {
    throw new Error('Hash is required');
  }
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions/${hash}`;

  try {
    return await HttpClient.get(URL);
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch transaction');
  }
};

export const fetchByBlockIndex = async (blockIndex) => {
  if (!blockIndex) {
    throw new Error('Block index is required');
  }
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions?blockIndex=${blockIndex}`;

  try {
    return await HttpClient.get(URL);
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch transaction');
  }
};

export const fetchLatest = async () => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions/latest`;

  try {
    return await HttpClient.get(URL);
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch last transaction');
  }
};

export const addTransaction = async ({ sender, receiver, payload }) => {
  if (!sender || !receiver || !payload) {
    throw new Error('All fields are required');
  }
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions`;

  try {
    return await HttpClient.post(URL, { sender, receiver, payload });
  } catch (error) {
    throw new Error(error.message || 'Failed to send transaction');
  }
};
