import { useMutation } from "@tanstack/react-query";
import { addTransaction } from "../../services/transactionService";
import { useState } from "react";
import { Notice } from "./Notice";

const InputField = ({ type, id, name, placeholder, onInput }) => (
    <div className="mb-5">
        <input
            type={type}
            id={id}
            name={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium"
            placeholder={placeholder}
            required
            onInput={onInput}
        />
    </div>
);

export const AddTransaction = () => {
    const [formData, setFormData] = useState({
        sender: "",
        receiver: "",
        payload: "",
    });

    const mutationFn = (formData) => addTransaction(formData);
    const { mutate, status, error } = useMutation({ mutationFn });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
        e.target.reset();
    };

    return (
        <div className="w-full md:w-1/3 py-8 px-10 bg-white border border-gray-200 rounded-3xl shadow flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Send Transaction</h2>
            <Notice
                status={status}
                error={error}
                successMsg={"Transaction completed"}
            />
            <form className="max-w-full" onSubmit={handleFormSubmit}>
                <InputField
                    type={"text"}
                    id="sender"
                    name="sender"
                    placeholder="Sender"
                    onInput={(e) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            sender: e.target.value,
                        }))
                    }
                />
                <InputField
                    type={"text"}
                    id="receiver"
                    name="receiver"
                    placeholder="Receiver"
                    onInput={(e) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            receiver: e.target.value,
                        }))
                    }
                />
                <InputField
                    type={"number"}
                    id="payload"
                    name="payload"
                    placeholder="Amount"
                    onInput={(e) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            payload: e.target.value,
                        }))
                    }
                />
                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 border-0 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-6 py-2 text-center"
                    >
                        Send
                    </button>
                    <button
                        type="reset"
                        className="text-orange-700 bg-orange-100 border-0 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-200 font-semibold rounded-lg text-sm w-full sm:w-auto px-6 py-2 text-center"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};
