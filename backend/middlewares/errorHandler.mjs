import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export default function errorHandler(err, req, res, _) {
    const LOGS_PATH = "../logs";
    const LOG_FILE = "error.log";

    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const logDirPath = path.join(dirname, LOGS_PATH);
    const logFilePath = path.join(logDirPath, LOG_FILE);

    if (!fs.existsSync(logDirPath)) {
        fs.mkdirSync(logDirPath, { recursive: true });
    }

    const logMessage =
        [
            `Method: ${req.method}`,
            `Url: ${req.originalUrl}`,
            `Date: ${new Date().toLocaleDateString("sv-SE")}`,
            `Time: ${new Date().toLocaleTimeString("sv-SE")}`,
            `Message: ${err.message}`
        ].join(" - ") + "\n";

    fs.appendFileSync(logFilePath, logMessage);
    res.status(err.statusCode).json({
        message: err.message,
        statusCode: err.statusCode
    });
}
