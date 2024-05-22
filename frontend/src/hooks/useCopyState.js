import { useEffect, useState } from "react";

export const useCopyState = () => {
    const [copyClicked, setCopyClicked] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (copyClicked) {
            timeoutId = setTimeout(() => setCopyClicked(false), 2000);
        }
        return () => clearTimeout(timeoutId);
    }, [copyClicked]);

    return { copyClicked, setCopyClicked };
}