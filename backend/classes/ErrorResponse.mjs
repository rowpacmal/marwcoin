class ErrorResponse extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = this.statusCode;
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
	}
}

export default ErrorResponse;