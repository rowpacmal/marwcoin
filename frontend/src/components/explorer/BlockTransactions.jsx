import fileSearchingSvg from '../../assets/file_searching_illustration.svg';
import { Poster } from '../Poster';
import { TableCell } from '../table/TableCell';
import { TableHeader } from '../table/TableHeader';

export const BlockTransactions = ({ block }) => {
	return (
		<>
			{block.transactions.length ? (
				<div className="relative overflow-x-auto max-h-96">
					<table className="md:w-full w-max text-sm text-left rtl:text-right text-gray-500">
						<thead className="text-xs text-gray-800 uppercase bg-sky-50">
							<tr>
								<TableHeader title="Transaction Hash" />
								<TableHeader title="Sender" />
								<TableHeader title="Receiver" />
								<TableHeader title="Amount" />
							</tr>
						</thead>

						<tbody>
							{block.transactions?.map((tx) => (
								<tr key={tx.hash} className="bg-white border-b">
									<TableCell value={tx.hash} />
									<TableCell value={tx.sender} />
									<TableCell value={tx.receiver} />
									<TableCell
										value={`${tx.payload.amount} ${tx.payload.ticker}`}
									/>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<Poster
					src={fileSearchingSvg}
					message={`Looks like there's nothing to see here yet...`}
				/>
			)}
		</>
	);
};
