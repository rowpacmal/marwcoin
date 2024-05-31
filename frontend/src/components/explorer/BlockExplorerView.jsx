import { useState } from "react";
import { BlockTable } from "./BlockTable";
import { LatestButton } from "../buttons/LatestButton";
import { Search } from "../Search";
import { IconBox } from "@tabler/icons-react";

export const BlockExplorerView = ({ setBlock }) => {
    const [blocks, setBlocks] = useState([]);

    return (
        <div className="w-full md:w-2/3 py-8 px-10 bg-white border border-gray-200 rounded-3xl shadow flex flex-col gap-5 mx-auto">
            <div className="flex gap-3 items-start md:flex-row flex-col">
                <h2 className="text-2xl font-bold">Block Explorer</h2>

                <LatestButton
                    setState={setBlocks}
                    serviceType="blocks"
                    buttonName="Latest Blocks"
                />
            </div>

            <Search
                setState={setBlocks}
                serviceType="blocks"
                icon={<IconBox />}
                placeholder="Search by block index or hash..."
            />

            <BlockTable blocks={blocks} setBlock={setBlock} />
        </div>
    );
};
