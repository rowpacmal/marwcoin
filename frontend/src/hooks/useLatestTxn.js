import { useMutation } from "@tanstack/react-query";
import { fetchLatest } from "../services/transactionService";
import { useEffect } from "react";

export const useLatestTxn = (setTransactions) => {
    const { mutate, status, data } = useMutation({
        mutationFn: () => fetchLatest(),
    });

    useEffect(() => {
        if (status === "success") {
            setTransactions([data]);
        }

        if (status === "error") {
            setTransactions([]);
        }
    }, [status, data, setTransactions]);

    return { mutate };
};