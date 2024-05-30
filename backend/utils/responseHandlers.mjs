import ErrorResponse from "../classes/ErrorResponse.mjs";
import ResponseData from "../classes/ResponseData.mjs";

export const handleResponse = (res, message, status, data = null) => {
    res.status(status).json(new ResponseData(message, status, data));
};

export const handleErrorResponse = (
    next,
    message = "Internal Server Error",
    status = 500
) => {
    next(new ErrorResponse(message, status));
};
