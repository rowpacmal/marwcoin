export const Poster = ({ src, message }) => {
	return (
		<div className="flex flex-col items-center">
			<img
				src={src}
				className="my-10 max-w-96"
				alt="Illustration of transaction search"
			/>
			<p className="text-md font-normal text-center">{message}</p>
		</div>
	);
};
