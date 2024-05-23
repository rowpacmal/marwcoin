export const Poster = ({ src, message }) => {
	return (
		<div className="flex flex-col items-center">
			<img
				src={src}
				className="mb-10 px-10"
				alt="Illustration of transaction search"
			/>
			<p className="text-md font-normal text-center">{message}</p>
		</div>
	);
};
