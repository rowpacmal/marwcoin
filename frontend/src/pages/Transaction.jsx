import { AddTransaction } from "../components/transaction/AddTransaction";
import { TransactionView } from "../components/transaction/TransactionView";
import "../tailwind.css";

export const Transaction = () => {
    return (
        <div className="relative flex flex-wrap gap-10 justify-center items-start mb-10 md:px-5 px-8">
            <TransactionView />
            <AddTransaction />
        </div>
    );
};
