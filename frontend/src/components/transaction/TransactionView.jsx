import { useState } from "react";
import { SearchTransaction } from "./SearchTransaction";
import { TransactionTable } from "./TransactionTable";
import { LatestTransactionBtn } from "./LatestTransactionBtn";

export const TransactionView = () => {
    const [transactions, setTransactions] = useState([]);

    return (
        <div className="w-full md:w-1/2 py-8 px-10 bg-white border border-gray-200 rounded-3xl shadow flex flex-col gap-5">
            <div className="flex gap-3 items-start md:flex-row flex-col">
                <h2 className="text-2xl font-bold">Transactions</h2>
                <LatestTransactionBtn setTransactions={setTransactions} />
            </div>
            <SearchTransaction setTransactions={setTransactions} />
            <TransactionTable transactions={transactions} />
        </div>
    );
};
