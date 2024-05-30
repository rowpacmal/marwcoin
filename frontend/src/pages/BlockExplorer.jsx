import { BlockView } from '../components/explorer/BlockView';
import { BlockExplorerView } from '../components/explorer/BlockExplorerView';
import { useState } from 'react';

export const BlockExplorer = () => {
	const [block, setBlock] = useState();

	return (
		<div className="max-w-7xl mx-auto">
			<div className="relative flex flex-col gap-10 justify-center items-start mb-10 md:px-5 px-8">
				<BlockView block={block} />

				<BlockExplorerView setBlock={setBlock} />
			</div>
		</div>
	);
};
