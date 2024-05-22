import transactionSvg from "../../assets/transaction_illustration.svg";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { useCopyState } from "../../hooks/useCopyState";

const TableHeader = ({ title }) => (
    <th scope="col" className="px-6 py-3">
        {title}
    </th>
);

const TableCell = ({ value }) => {
    const { copyClicked, setCopyClicked } = useCopyState();

    const handleCopyClick = () => {
        navigator.clipboard.writeText(value);
        setCopyClicked(true);
    };

    return (
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate max-w-4 relative">
            {value}
            <button
                className={`absolute top-3.5 right-0 p-0.5 text-xs text-gray-800 ${copyClicked ? "bg-blue-200 hover:bg-blue-400" : "bg-gray-200 hover:bg-gray-400"} rounded transition-colors duration-200 border-0`}
                onClick={handleCopyClick}
            >
                {copyClicked ? <IconCheck size={16} /> : <IconCopy size={16} />}
            </button>
        </td>
    );
};

export const TransactionTable = ({ transactions }) => {
    return (
        <>
            {transactions.length ? (
                <div className="relative overflow-x-auto max-h-96">
                    <table className="md:w-full w-max text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-800 uppercase bg-sky-50">
                            <tr>
                                <TableHeader title="Transaction Hash" />
                                <TableHeader title="Sender" />
                                <TableHeader title="Receiver" />
                                <TableHeader title="Amount" />
                            </tr>
                        </thead>
                        <tbody>
                            {transactions?.map((tx) => (
                                <tr key={tx.hash} className="bg-white border-b">
                                    <TableCell value={tx.hash} />
                                    <TableCell value={tx.sender} />
                                    <TableCell value={tx.receiver} />
                                    <TableCell value={tx.payload} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <img
                        src={transactionSvg}
                        className="w-80"
                        alt="Illustration of transaction search"
                    />
                    <h2 className="text-md font-normal text-center">
                        Eager to uncover the digital trails? Start by searching
                        for transactions
                    </h2>
                </div>
            )}
        </>
    );
};
