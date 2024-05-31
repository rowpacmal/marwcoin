export const Notice = ({ status, error, successMsg }) => {
    return (
        <>
            {status === "error" && (
                <div
                    className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-orange-50 font-medium"
                    role="alert"
                >
                    <span className="font-bold">Something went wrong </span>
                    &mdash; {error.message}
                </div>
            )}
            {status === "success" && (
                <div
                    className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 font-medium"
                    role="alert"
                >
                    <span className="font-bold">Success </span>&mdash;{" "}
                    {successMsg}
                </div>
            )}
        </>
    );
};
