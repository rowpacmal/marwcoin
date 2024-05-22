import { Overview } from './Overview';
import viewBlockSvg from '../../assets/view_block_illustration.svg';

export const BlockView = () => {
	const block = true;

	return (
		<div className="w-full md:w-2/3 py-8 px-10 bg-white border border-gray-200 rounded-3xl shadow flex flex-col gap-5 mx-auto">
			<h2 className="text-2xl font-bold">View Block</h2>

			{block ? (
				<Overview />
			) : (
				<div className="flex flex-col items-center">
					<img
						src={viewBlockSvg}
						className="w-80 mb-6"
						alt="Illustration of transaction search"
					/>
					<p className="text-md font-normal text-center">
						Eager to uncover the digital trails? Start by searching for
						transactions
					</p>
				</div>
			)}
		</div>
	);
};
