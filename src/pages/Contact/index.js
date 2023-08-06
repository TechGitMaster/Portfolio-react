import React from 'react';
import { Mail, Map } from '../../utilities/PNG';
import { ContactGIFs } from '../../utilities/GIF';

const Contact = () => {
    return (
        <>
            <div className='mx-auto max-w-[1000px] mt-[100px] pb-[100px]'>
                <p className='text-[20px] text-[#2A47E3] tittleT'>Contact Me</p>
                <p className='text-[27px] text-[#241F1F] font-bold mt-[5px]'>Got a question? Don’t be shy!</p>

                <div className='flex mt-[45px]'>
                    <div className='flex items-center mr-[45px]'>
                        <div className='mr-[15px]'>
                            <img src={ Map } alt='map' className='h-[30px]' />
                        </div>
                        <div>
                            <p className='text-[17px] font-bold'>Location</p>
                            <p className='text-[15px] mt-[5px]'>North Caloocan City, Brgy. 185, Malaria</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='mr-[15px]'>
                            <img src={ Mail } alt='map' className='h-[30px]' />
                        </div>
                        <div>
                            <p className='text-[17px] font-bold'>Mail</p>
                            <p className='text-[15px] mt-[5px]'>kylevelarde374@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-[80px]'>
                    <div>
                        <img src={ ContactGIFs } alt='contact' className='h-[300px]' />
                        <p className='text-[#241F1F] text-[15px] text-center -mt-[20px]'>Copyright © 2023. All rights are reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;