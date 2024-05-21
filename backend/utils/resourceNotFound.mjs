import ErrorResponse from '../classes/ErrorResponse.mjs';

const resourceNotFound = (req, _, next) => {
	const { method, originalUrl } = req;

	next(
		new ErrorResponse(
			`Cannot use ${method} at resource ${originalUrl}, endpoint Not Found.`,
			404
		)
	);
};

export default resourceNotFound;
