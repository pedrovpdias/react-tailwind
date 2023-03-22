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
                grid grid-cols-2 place-content-center gap-20
                p-10
                shadow
        '>
            <div>
                <h1 className='
                    text-2xl
                    font-bold
                '>
                    Get in touch
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque nulla aut
                    consequuntur magni esse velit maxime rem, vitae explicabo accusantium, 
                    reiciendis similique ratione animi delectus laboriosam mollitia quibusdam ut.
                </p>

                <div>
                    <div>
                        <BuildingOffice2Icon />
                        <div>
                            545 Mavis Island<br/>
                            Chicago, IL 99191
                        </div>
                    </div>

                    <div>
                        <PhoneIcon />
                        <div>
                            +1 (555) 234-5678
                        </div>
                    </div>

                    <div>
                        <EnvelopeIcon />
                        <div>
                            contact@exemple.com
                        </div>
                    </div>
                </div>
            </div>

            <form action=""></form>

            
        </div>
    );
}