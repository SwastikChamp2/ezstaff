import React from 'react';

const CustomModal = ({ show, onClose, onDelete, title, message }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50000000000000">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <p className="text-gray-600 mb-6">{message}</p>

                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onDelete();
                                onClose();
                            }}
                            className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-medium"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;