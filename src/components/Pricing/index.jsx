import React from "react";
import { CheckIcon } from '@heroicons/react/24/solid';

export default function Princing() {
    const includedItems = [
        { 
            index: 0,
            item: 'Private forum access'
        },
        { 
            index: 1,
            item: 'Member resources'
        },
        { 
            index: 2,
            item: 'Entry to annual conference'
        },
        { 
            index: 3,
            item: 'Official member t-shirt'
        },
    ];

    return (
        <div className="
                grid gap-20 py-28 px-8 place-content-center
                border border-gray-200 rounded-xl
            "
        >
            <h1 className="font-bold text-4xl text-center">
                Simple no-tricks princing
            </h1>

            <p className="text-gray-600 w-3/4 text-center text-xl mx-auto">
                Distinctio et nulla eum soluta et neque labore quibusdam. 
                Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id 
                ut laborum.
            </p>

            <div 
                className="
                    flex flex-row
                    gap-20 mt-10 p-2 h-fit
                    border border-gray-200 rounded-3xl
                "
            >
                <div className="px-10 pt-6 grid gap-10 flex-1">
                    <h2 className="text-2xl font-bold">
                        Lifetime membership
                    </h2>

                    <p className="text-gray-600 text-justify">
                        Lorem ipsum dolor sit amet consect etur adipisicing elit. 
                        Itaque amet indis perferendis blanditiis repellendus etur 
                        quidem assumenda.
                    </p>
                    
                    <div className="border-t relative">
                        <h4 
                            className="
                                py-1 pr-3 bg-white
                                font-bold text-s text-indigo-600
                                absolute -top-4
                            "
                        >
                            What's included
                        </h4>

                        <ul className="
                                grid grid-cols-2 pt-10 gap-5 
                                text-sm text-gray-600
                            "
                        >
                            {
                                includedItems.map(item => (
                                    <li 
                                        key={item.index}
                                        className="flex gap-3 items-start justify-start"
                                    >
                                        <CheckIcon className="text-indigo-600" />
                                        {item.item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div 
                    className="
                        bg-gray-50 max-w-md h-fit py-16
                        flex flex-col flex-1 gap-5 items-center justify-center
                        border border-gray-200 rounded-2xl
                    "
                >
                    <h3 className="font-bold text-base text-gray-600">
                        Pay once, own it forever
                    </h3>

                    <div
                        className="
                            flex items-end gap-3
                            font-bold text-6xl                            
                        "
                    >
                        $349 <span className="text-sm text-gray-600">USD</span>
                    </div>

                    <button
                        className="
                            bg-indigo-600
                            rounded-md p-2 w-64
                            text-sm font-bold text-white
                        "
                    >
                        Get access
                    </button>

                    <p className="text-xs text-center w-64 text-gray-500" >
                        Invoices and receipts available for easy company 
                        reimbursement
                    </p>
                </div>
            </div>
        </div>
    )
}