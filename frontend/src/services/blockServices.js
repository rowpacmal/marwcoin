import HttpClient from './httpClient.mjs';

export const getAllBlocks = async () => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks`;

  try {
    return await HttpClient.get(URL);
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch blocks');
  }
};

export const getBlockByHash = async (hash) => {
  if (!hash) {
    throw new Error('Block hash is required');
  }
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks/hash/${hash}`;

  try {
    return await HttpClient.get(URL);
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch block');
  }
};

export const getBlockByIndex = async (blockIndex) => {
  if (!blockIndex) {
    throw new Error('Block index is required');
  }
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks/${blockIndex}`;

  try {
    return await HttpClient.get(URL);
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch block');
  }
};

export const getLastBlock = async (topBlocks) => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks/latest${topBlocks && '?numberOfBlock=' + topBlocks}`;

  try {
    return await HttpClient.get(URL);
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch last block');
  }
};
