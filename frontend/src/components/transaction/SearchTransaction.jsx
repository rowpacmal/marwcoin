import { Notice } from './Notice';
import { useSearchTxns } from '../../hooks/useSearchTxns';
import { SearchForm } from './SearchForm';
import { IconCoins } from '@tabler/icons-react';

export const SearchTransaction = ({ setTransactions }) => {
	const { mutate, status, error } = useSearchTxns(setTransactions);

	return (
		<>
			<SearchForm
				mutate={mutate}
				icon={<IconCoins />}
				placeholder={'Search by transaction hash or block index...'}
			/>
			<Notice
				status={status}
				error={error}
				successMsg={'Here is the search result:'}
			/>
		</>
	);
};
