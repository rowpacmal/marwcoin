import { useSearchState } from "../hooks/useSearchState";
import { SearchForm } from "./SearchForm";
import { Notice } from "./Notice";

export const Search = ({ setState, serviceType, icon, placeholder }) => {
    const { mutate, status, error } = useSearchState(setState, serviceType);

    return (
        <>
            <SearchForm mutate={mutate} icon={icon} placeholder={placeholder} />
            <Notice
                status={status}
                error={error}
                successMsg={"Here is the search result:"}
            />
        </>
    );
};
