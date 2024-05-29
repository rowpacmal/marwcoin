import { useMutation } from '@tanstack/react-query';
import { fetchLatest } from '../services/transactionService';
import { getLastBlock } from '../services/blockServices';
import { useEffect } from 'react';

export const useLatestState = (setState, serviceType) => {
	let activeService;

	switch (serviceType.toLowerCase()) {
		case 'blocks':
			activeService = getLastBlock(10);
			break;

		case 'transactions':
			activeService = fetchLatest();
			break;

		default:
			throw new Error('Invalid service type');
	}

	const { mutate, status, data } = useMutation({
		mutationFn: () => activeService,
	});

	useEffect(() => {
		if (status === 'success') {
			setState(Array.isArray(data) ? data : [data]);
		}

		if (status === 'error') {
			setState([]);
		}
	}, [status, data, setState]);

	return { mutate };
};
