import { BlockOverview } from './BlockOverview';

export const BlockInfo = ({ block }) => {
	const activeButton =
		'p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:border-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full sm:w-auto px-6 py-3 text-center';
	const inactiveButton =
		'p-2.5 ms-2 text-sm font-semibold text-orange-700 bg-orange-100 rounded-lg border-0 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-200 w-full sm:w-auto px-6 py-3 text-center';

	return (
		<div>
			<div className="flex flex-wrap gap-3 mb-6">
				<button className={activeButton}>Overview</button>
				<button className={inactiveButton}>Transactions</button>
			</div>

			<BlockOverview block={block} />
		</div>
	);
};
