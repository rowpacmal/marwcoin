import { handleErrorResponse } from "./responseHandlers.mjs";

const resourceNotFound = (req, _, next) => {
    const { method, originalUrl } = req;
    return handleErrorResponse(
        next,
        `Cannot use ${method} at resource ${originalUrl}, endpoint does not exist`,
        404
    );
};

export default resourceNotFound;
