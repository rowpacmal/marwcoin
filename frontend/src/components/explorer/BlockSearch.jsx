import { useSearchBlock } from '../../hooks/useSearchBlock';
import { SearchForm } from '../transaction/SearchForm';
import { Notice } from '../transaction/Notice';
import { IconBox } from '@tabler/icons-react';

export const BlockSearch = ({ setBlocks }) => {
	const { mutate, status, error } = useSearchBlock(setBlocks);

	return (
		<>
			<SearchForm
				mutate={mutate}
				icon={<IconBox />}
				placeholder={'Search by block index or hash...'}
			/>
			<Notice
				status={status}
				error={error}
				successMsg={'Here is the search result:'}
			/>
		</>
	);
};