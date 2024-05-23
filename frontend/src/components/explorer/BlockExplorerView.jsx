import { useState } from 'react';
import { BlockSearch } from './BlockSearch';
import { BlockTable } from './BlockTable';
import { LatestBlockButton } from './LatestBlockButton';

export const BlockExplorerView = () => {
	const [blocks, setBlocks] = useState([]);

	return (
		<div className="w-full md:w-2/3 py-8 px-10 bg-white border border-gray-200 rounded-3xl shadow flex flex-col gap-5 mx-auto">
			<div className="flex gap-3 items-start md:flex-row flex-col">
				<h2 className="text-2xl font-bold">Block Explorer</h2>
				<LatestBlockButton setBlocks={setBlocks} />
			</div>
			<BlockSearch setBlocks={setBlocks} />
			<BlockTable blocks={blocks} />
		</div>
	);
};
