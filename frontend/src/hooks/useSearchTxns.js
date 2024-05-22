import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import {
    fetchByBlockIndex,
    fetchByHash,
} from "../services/transactionService";

export const useSearchTxns = (setTransactions) => {
    const { mutate, status, error, data } = useMutation({
        mutationFn: (query) =>
            isNaN(query) ? fetchByHash(query) : fetchByBlockIndex(query),
    });

    useEffect(() => {
        if (status === "success") {
            setTransactions(Array.isArray(data) ? data : [data]);
        }

        if (status === "error") {
            setTransactions([]);
        }
    }, [status, data, setTransactions]);

    return { mutate, status, error };
};