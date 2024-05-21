import fs from 'fs';
import path from 'path';

export default function errorHandler(err, req, res, next) {
	const logFilePath = path.join(__appdir, 'logs', 'error.log');
	const statusCode = err.statusCode || 500;
	const success = err.success || false;

	const logMessage =
		[
			`Method: ${req.method}`,
			`Url: ${req.originalUrl}`,
			`Date: ${new Date().toLocaleDateString('sv-SE')}`,
			`Time: ${new Date().toLocaleTimeString('sv-SE')}`,
			`Success: ${success}`,
			`Message: ${err.message}`,
		].join(' - ') + '\n';

	fs.appendFileSync(logFilePath, logMessage);

	if (!res.headersSent) {
		res.status(statusCode).json({ success: success, message: err.message });
	}
}
