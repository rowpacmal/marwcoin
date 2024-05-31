import { CopyButton } from "../buttons/CopyButton";

export const TableCell = ({ value }) => {
    return (
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate max-w-4 relative">
            {value}
            <CopyButton value={value} />
        </td>
    );
};
