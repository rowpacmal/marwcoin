import { Notice } from "./Notice";
import { useSearchTxns } from "../../hooks/useSearchTxns";
import { SearchForm } from "./SearchForm";

export const SearchTransaction = ({ setTransactions }) => {
    const { mutate, status, error } = useSearchTxns(setTransactions);

    return (
        <>
            <SearchForm mutate={mutate} />
            <Notice
                status={status}
                error={error}
                successMsg={"Here is the search result:"}
            />
        </>
    );
};
