import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { fetchByBlockIndex, fetchByHash } from '../services/transactionService';
import { getBlockByIndex, getBlockByHash } from '../services/blockServices';

export const useSearchState = (setState, serviceType) => {
	let serviceByHash, serviceByIndex;

	switch (serviceType.toLowerCase()) {
		case 'blocks':
			serviceByHash = (query) => getBlockByHash(query);
			serviceByIndex = (query) => getBlockByIndex(query);
			break;

		case 'transactions':
			serviceByHash = (query) => fetchByHash(query);
			serviceByIndex = (query) => fetchByBlockIndex(query);
			break;

		default:
			throw new Error('Invalid service type');
	}

	const { mutate, status, error, data } = useMutation({
		mutationFn: (query) =>
			isNaN(query) ? serviceByHash(query) : serviceByIndex(query),
	});

	useEffect(() => {
		if (status === 'success') {
			setState(Array.isArray(data) ? data : [data]);
		}

		if (status === 'error') {
			setState([]);
		}
	}, [status, data, setState]);

	return { mutate, status, error };
};
