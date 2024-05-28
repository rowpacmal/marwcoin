import searchBlockSvg from '../../assets/illustrations/search_block_illustration.svg';
import { TableHeader } from '../table/TableHeader';
import { TableCell } from '../table/TableCell';
import { Poster } from '../Poster';
import { IconEye } from '@tabler/icons-react';

export const BlockTable = ({ blocks, setBlock }) => {
	return (
		<>
			{blocks.length ? (
				<div className="relative overflow-x-auto max-h-96">
					<table className="md:w-full w-max text-sm text-left rtl:text-right text-gray-500">
						<thead className="text-xs text-gray-800 uppercase bg-sky-50">
							<tr>
								<TableHeader title="Index" />
								<TableHeader title="Hash" />
								<TableHeader title="Txn" />

								<th></th>
							</tr>
						</thead>

						<tbody>
							{blocks?.map((block) => (
								<tr key={block.index} className="bg-white border-b">
									<TableCell value={block.index} />
									<TableCell value={block.hash} />
									<TableCell value={block.transactions.length} />

									<td className="text-right px-6 w-6">
										<button
											className="text-white bg-blue-700 border-0 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-3 py-1 text-center"
											onClick={() => setBlock(block)}
										>
											<IconEye />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<Poster
					src={searchBlockSvg}
					message={
						'Our block explorer lets you  unravel every transaction, track wallet activity, and gain insights into the Marw network.'
					}
				/>
			)}
		</>
	);
};
