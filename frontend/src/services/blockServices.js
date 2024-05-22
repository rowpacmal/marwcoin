export const getAllBlocks = async () => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch blocks');
    }

    return data.payload;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch blocks');
  }
};

export const getBlock = async () => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch block');
    }

    return data.payload;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch block');
  }
};

export const getBlockByHash = async (hash) => {
  if (!hash) {
    throw new Error('Block hash is required');
  }
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks/${hash}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch block');
    }

    return data.payload;
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
    const res = await fetch(URL);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch block');
    }

    return data.payload;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch block');
  }
};

export const getLastBlock = async () => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blocks/latest`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch block');
    }

    return data.payload;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch block');
  }
};
