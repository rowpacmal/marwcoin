import { BlockView } from '../components/explorer/BlockView';
import { BlockchainView } from '../components/explorer/BlockchainView';

export const BlockExplorer = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="relative flex flex-col gap-10 justify-center items-start mb-10 md:px-5 px-8">
				<BlockView />
				<BlockchainView />
			</div>
		</div>
	);
};