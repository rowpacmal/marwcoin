import {
	IconBox,
	IconClock,
	IconCoins,
	IconDatabase,
	IconFlame,
	IconGasStation,
	IconGauge,
	IconHash,
	IconProgressAlert,
	IconReceipt,
	IconWallet,
} from '@tabler/icons-react';

const TableRow = ({ icon, title, value }) => {
	return (
		<div className="flex justify-between items-center">
			<div className="px-6 py-3 whitespace-nowrap">
				<span className="flex gap-3 items-center">
					{icon}
					{title}:
				</span>
			</div>

			<div className="px-6 py-3 font-medium whitespace-nowrap truncate relative">
				{value}
			</div>
		</div>
	);
};

export const Overview = () => {
	return (
		<div>
			<div className="flex flex-wrap gap-3 mb-6">
				<button className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:border-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full sm:w-auto px-6 py-3 text-center">
					Overview
				</button>

				<button className="p-2.5 ms-2 text-sm font-semibold text-orange-700 bg-orange-100 rounded-lg border-0 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-200 w-full sm:w-auto px-6 py-3 text-center">
					Transactions
				</button>
			</div>

			<div className="relative overflow-x-auto">
				<div className="md:w-full w-max text-sm text-left rtl:text-right text-gray-500">
					<div className="border-b">
						<TableRow icon={<IconBox />} title={'Block Height'} value={256} />

						<TableRow
							icon={<IconProgressAlert />}
							title={'Status'}
							value={'finalized'}
						/>

						<TableRow
							icon={<IconClock />}
							title={'Timestamp'}
							value={1237984876}
						/>

						<TableRow icon={<IconCoins />} title={'Transactions'} value={128} />
					</div>

					<div className="border-b">
						<TableRow
							icon={<IconWallet />}
							title={'Fee Recipient'}
							value={'0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5'}
						/>

						<TableRow
							icon={<IconReceipt />}
							title={'Block Reward'}
							value={'0.0742835575 MRW'}
						/>

						<TableRow
							icon={<IconGauge />}
							title={'Total Difficulty'}
							value={'58750003716598352816469'}
						/>

						<TableRow
							icon={<IconDatabase />}
							title={'Size'}
							value={'33598 bytes'}
						/>
					</div>

					<div className="border-b">
						<TableRow
							icon={<IconFlame />}
							title={'Gas Used'}
							value={'7824518 (26.08%)'}
						/>

						<TableRow
							icon={<IconGasStation />}
							title={'Base Fee Per Gas'}
							value={'0.0000000194 MRW'}
						/>
					</div>

					<div>
						<TableRow
							icon={<IconHash />}
							title={'Current Hash'}
							value={
								'0x8a2ac2d3da2f1a9b4fc6866f2af57cb24671e9480602c70df8f4a9564fcca42c'
							}
						/>

						<TableRow
							icon={<IconHash />}
							title={'Previous Hash'}
							value={
								'0x158e4ee238d509155a4e8b8c47df943995d1c7a48d3d475638d79811f9985a64'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
