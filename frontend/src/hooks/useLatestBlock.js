import { useMutation } from '@tanstack/react-query';
import { getLastBlock } from '../services/blockServices';
import { useEffect } from 'react';

export const useLatestBlock = (setBlocks) => {
	const { mutate, status, data } = useMutation({
		mutationFn: () => getLastBlock(10),
	});

	useEffect(() => {
		if (status === 'success') {
			setBlocks(Array.isArray(data) ? data : [data]);
		}

		if (status === 'error') {
			setBlocks([]);
		}
	}, [status, data, setBlocks]);

	return { mutate };
};
