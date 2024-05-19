class ResponseData {
    constructor(message, statusCode, payload) {
        this.message = message;
        this.statusCode = statusCode;
        this.success = String(statusCode).startsWith("2");
        if (payload) {
            this.payload = payload;
        }
    }
}

export default ResponseData;