import { useState } from 'react';
import { SearchTransaction } from '../transaction/SearchTransaction';
import { TransactionTable } from '../transaction/TransactionTable';

export const BlockchainView = () => {
	const [transactions, setTransactions] = useState([]);

	return (
		<div className="w-full md:w-2/3 py-8 px-10 bg-white border border-gray-200 rounded-3xl shadow flex flex-col gap-5 mx-auto">
			<SearchTransaction setTransactions={setTransactions} />
			<TransactionTable transactions={transactions} />
		</div>
	);
};
