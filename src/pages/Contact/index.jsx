import React from 'react';
import { 
    BuildingOffice2Icon,
    PhoneIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
    return (   
        <div className='
                container 
                xl 
                grid grid-cols-2 place-content-center
                border-solid border border-gray-100
                rounded-lg
                antialiased
                font-sans
                divide-x divide-gray-100 divide-solid
        '>
            <div className='
                grid gap-10
                px-10 py-20
                bg-gradient-to-bl from-white to-gray-100
            '>
                <h1 className='
                    text-2xl
                    font-bold
                '>
                    Get in touch
                </h1>
                <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque nulla aut
                    consequuntur magni esse velit maxime rem, vitae explicabo accusantium, 
                    reiciendis similique ratione animi delectus laboriosam mollitia quibusdam ut.
                </p>

                <div className='text-gray-500 text-sm grid gap-5'>
                    <div className='flex gap-3 items-start'> 
                        <BuildingOffice2Icon className='text-gray-400' />
                        <div>
                            545 Mavis Island<br/>
                            Chicago, IL 99191
                        </div>
                    </div>

                    <div className='flex gap-3 items-start'>
                        <PhoneIcon className='text-gray-400' />
                        <div>
                            +1 (555) 234-5678
                        </div>
                    </div>

                    <div className='flex gap-3 items-start'>
                        <EnvelopeIcon className='text-gray-400' />
                        <div>
                            contact@exemple.com
                        </div>
                    </div>
                </div>
            </div>

            <form
                className='
                    flex flex-wrap gap-8
                    py-20 px-8
                ' 
                action=""
            >
                <div className='grid gap-3 h-fit flex-1'>
                    <label 
                        htmlFor=""
                        className='font-bold text-sm'
                    >
                        First name
                    </label>
                    <input
                        className='
                        border border-gray-200 border-solid rounded-md 
                        outline-indigo-600
                        px-3 py-1
                        h-10
                        w-full
                        '
                        type="text" 
                    />
                </div>

                <div className='grid gap-3 h-fit flex-1'>
                    <label 
                        htmlFor=""
                        className='font-bold text-sm'
                    >
                        Last name
                    </label>
                    <input
                        className='
                        border border-gray-200 border-solid rounded-md 
                        outline-indigo-600
                        px-3 py-1
                        h-10
                        w-full
                        '
                        type="text" 
                    />
                </div>
                
                <div className='grid gap-3 h-fit w-full'>
                    <label 
                        htmlFor=""
                        className='font-bold text-sm'
                    >
                        E-mail
                    </label>
                    <input
                        className='
                        border border-gray-200 border-solid rounded-md
                        outline-indigo-600
                        px-3 py-1
                        h-10
                        w-full
                        '
                        type="text" 
                    />
                </div>

                <div className='grid gap-3 h-fit w-full'>
                    <label 
                        htmlFor=""
                        className='font-bold text-sm'
                    >
                        Phone number
                    </label>
                    <input
                        className='
                        border border-gray-200 border-solid rounded-md 
                        outline-indigo-600
                        px-3 py-1
                        h-10
                        w-full
                        '
                        type="text" 
                    />
                </div>

                <div className='grid gap-3 h-fit w-full'>
                    <label 
                        htmlFor=""
                        className='font-bold text-sm'
                    >
                        Message
                    </label>
                    <textarea
                        className='
                        border border-gray-200 border-solid rounded-md 
                        outline-indigo-600
                        px-3 py-1
                        h-20
                        w-full
                        '
                        type="text" 
                    ></textarea>
                </div>

                <button
                    className='bg-indigo-600 p-3 rounded-md
                        outline-indigo-600
                        font-bold text-white text-sm mr-0 ml-auto
                    '
                >
                    Send message
                </button>

            </form>

            
        </div>
    );
}