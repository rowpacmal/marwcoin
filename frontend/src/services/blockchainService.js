export const getPendingTransactions = async () => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blockchain`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch pending transactions');
    }

    return data.payload;
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
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ minerAddress }),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to mine block');
    }

    return data.payload;
  } catch (error) {
    throw new Error(error.message || 'Failed to mine block');
  }
};

export const validateChain = async () => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blockchain/validate`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to validate chain');
    }

    return data.payload;
  } catch (error) {
    throw new Error(error.message || 'Failed to validate chain');
  }
};
