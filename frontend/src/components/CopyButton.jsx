import { IconCopy, IconCheck } from '@tabler/icons-react';
import { useCopyState } from '../hooks/useCopyState';

export const CopyButton = ({ value }) => {
	const { copyClicked, setCopyClicked } = useCopyState();

	const handleCopyClick = () => {
		navigator.clipboard.writeText(value);
		setCopyClicked(true);
	};

	return (
		<button
			className={`absolute top-3.5 right-0 p-0.5 text-xs text-gray-800 ${copyClicked ? 'bg-blue-200 hover:bg-blue-400' : 'bg-gray-200 hover:bg-gray-400'} rounded transition-colors duration-200 border-0`}
			onClick={handleCopyClick}
		>
			{copyClicked ? <IconCheck size={16} /> : <IconCopy size={16} />}
		</button>
	);
};
