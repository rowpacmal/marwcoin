import searchBlockSvg from '../../assets/search_block_illustration.svg';
import { TableHeader } from '../table/TableHeader';
import { TableCell } from '../table/TableCell';
import { Poster } from '../Poster';

export const BlockTable = ({ blocks }) => {
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

									<td className="text-right px-6 max-w-4">
										<button className="text-white bg-blue-700 border-0 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-6 py-2 text-center">
											View
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
