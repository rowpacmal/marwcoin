import { useState } from "react";
import { IconCoins } from "@tabler/icons-react";

export const SearchForm = ({ mutate }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        mutate(searchQuery);
    };

    return (
        <form
            className="flex items-center w-full mx-auto"
            onSubmit={handleFormSubmit}
        >
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IconCoins />
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 font-medium"
                    placeholder="Search by transaction hash or block index.."
                    required
                    onInput={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:border-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
};
