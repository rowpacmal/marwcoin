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
} from "@tabler/icons-react";

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
                        title={"Block Height"}
                        value={block.index}
                    />

                    <BlockProperty
                        icon={<IconProgressAlert />}
                        title={"Status"}
                        value={block.status ? "Finalized" : "Unfinalized"}
                    />

                    <BlockProperty
                        icon={<IconClock />}
                        title={"Timestamp"}
                        value={block.timestamp}
                    />

                    <BlockProperty
                        icon={<IconCoins />}
                        title={"Transactions"}
                        value={block.transactions.length}
                    />
                </div>

                <div className="border-b">
                    <BlockProperty
                        icon={<IconWallet />}
                        title={"Fee Recipient"}
                        value={block.miner?.address}
                    />

                    <BlockProperty
                        icon={<IconReceipt />}
                        title={"Block Reward"}
                        value={block.miner?.reward + " MRW"}
                    />

                    <BlockProperty
                        icon={<IconGauge />}
                        title={"Total Difficulty"}
                        value={block.nonce}
                    />

                    <BlockProperty
                        icon={<IconDatabase />}
                        title={"Size"}
                        value={block.size + " bytes"}
                    />
                </div>

                <div className="border-b">
                    <BlockProperty
                        icon={<IconFlame />}
                        title={"Gas Used"}
                        value={`${block.gasUsed} (${(block.gasUsed / 10000).toFixed(2)}%)`}
                    />

                    <BlockProperty
                        icon={<IconGasStation />}
                        title={"Base Fee Per Gas"}
                        value={block.gasPrice + " MRW"}
                    />
                </div>

                <div>
                    <BlockProperty
                        icon={<IconHash />}
                        title={"Current Hash"}
                        value={block.hash}
                    />

                    <BlockProperty
                        icon={<IconHash />}
                        title={"Previous Hash"}
                        value={block.prevHash}
                    />
                </div>
            </div>
        </div>
    );
};
