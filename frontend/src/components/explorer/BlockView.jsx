import { BlockInfo } from './BlockInfo';
import viewBlockSvg from '../../assets/view_block_illustration.svg';
import { Poster } from '../Poster';

export const BlockView = () => {
	const block = true;

	return (
		<div className="w-full md:w-2/3 py-8 px-10 bg-white border border-gray-200 rounded-3xl shadow flex flex-col gap-5 mx-auto">
			<h2 className="text-2xl font-bold">View Block</h2>

			{block ? (
				<BlockInfo block={block} />
			) : (
				<Poster
					src={viewBlockSvg}
					message={
						'Want to see the inner workings of a Marw block? Start by searching for blocks...'
					}
				/>
			)}
		</div>
	);
};
