import { useLatestBlock } from '../../hooks/useLatestBlock';

export const LatestBlockButton = ({ setBlocks }) => {
	const { mutate } = useLatestBlock(setBlocks);

	const handleButton = () => {
		mutate();
	};

	return (
		<button
			type="button"
			className="text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
			onClick={handleButton}
		>
			Latest Blocks
		</button>
	);
};
