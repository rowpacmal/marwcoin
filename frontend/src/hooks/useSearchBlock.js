import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getBlockByIndex, getBlockByHash } from '../services/blockServices';

export const useSearchBlock = (setBlocks) => {
	const { mutate, status, error, data } = useMutation({
		mutationFn: (query) =>
			isNaN(query) ? getBlockByHash(query) : getBlockByIndex(query),
	});

	useEffect(() => {
		if (status === 'success') {
			setBlocks(Array.isArray(data) ? data : [data]);
		}

		if (status === 'error') {
			setBlocks([]);
		}
	}, [status, data, setBlocks]);

	return { mutate, status, error };
};
