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

const BlockProperty = ({ icon, title, value }) => {
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

export const BlockOverview = ({ block }) => {
	return (
		<div className="relative overflow-x-auto">
			<div className="md:w-full w-max text-sm text-left rtl:text-right text-gray-500">
				<div className="border-b">
					<BlockProperty
						icon={<IconBox />}
						title={'Block Height'}
						value={256}
					/>

					<BlockProperty
						icon={<IconProgressAlert />}
						title={'Status'}
						value={'finalized'}
					/>

					<BlockProperty
						icon={<IconClock />}
						title={'Timestamp'}
						value={1237984876}
					/>

					<BlockProperty
						icon={<IconCoins />}
						title={'Transactions'}
						value={128}
					/>
				</div>

				<div className="border-b">
					<BlockProperty
						icon={<IconWallet />}
						title={'Fee Recipient'}
						value={'0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5'}
					/>

					<BlockProperty
						icon={<IconReceipt />}
						title={'Block Reward'}
						value={'0.0742835575 MRW'}
					/>

					<BlockProperty
						icon={<IconGauge />}
						title={'Total Difficulty'}
						value={'58750003716598352816469'}
					/>

					<BlockProperty
						icon={<IconDatabase />}
						title={'Size'}
						value={'33598 bytes'}
					/>
				</div>

				<div className="border-b">
					<BlockProperty
						icon={<IconFlame />}
						title={'Gas Used'}
						value={'7824518 (26.08%)'}
					/>

					<BlockProperty
						icon={<IconGasStation />}
						title={'Base Fee Per Gas'}
						value={'0.0000000194 MRW'}
					/>
				</div>

				<div>
					<BlockProperty
						icon={<IconHash />}
						title={'Current Hash'}
						value={
							'0x8a2ac2d3da2f1a9b4fc6866f2af57cb24671e9480602c70df8f4a9564fcca42c'
						}
					/>

					<BlockProperty
						icon={<IconHash />}
						title={'Previous Hash'}
						value={
							'0x158e4ee238d509155a4e8b8c47df943995d1c7a48d3d475638d79811f9985a64'
						}
					/>
				</div>
			</div>
		</div>
	);
};
