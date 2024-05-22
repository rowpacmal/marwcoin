export const fetchByHash = async (hash) => {
    if (!hash) {
        throw new Error("Hash is required");
    }
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions/${hash}`;

    try {
        const res = await fetch(URL);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to fetch transaction");
        }

        return data.payload;
    } catch (error) {
        throw new Error(error.message || "Failed to fetch transaction");
    }
};

export const fetchByBlockIndex = async (blockIndex) => {
    if (!blockIndex) {
        throw new Error("Block index is required");
    }
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions?blockIndex=${blockIndex}`;

    try {
        const res = await fetch(URL);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to fetch transaction");
        }

        return data.payload;
    } catch (error) {
        throw new Error(error.message || "Failed to fetch transaction");
    }
};

export const fetchLatest = async () => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions/latest`;

    try {
        const res = await fetch(URL);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to fetch transaction");
        }

        return data.payload;
    } catch (error) {
        throw new Error(error.message || "Failed to fetch transaction");
    }
};

export const addTransaction = async ({ sender, receiver, payload }) => {
    if (!sender || !receiver || !payload) {
        throw new Error("All fields are required");
    }
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/transactions`;

    try {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sender, receiver, payload })
        });
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to send transaction");
        }

        return data.payload;
    } catch (error) {
        throw new Error(error.message || "Failed to send transaction");
    }
};