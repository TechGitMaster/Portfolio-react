import React from 'react';

const LineSide = () => {
    return (
        <>
            <div className='h-full relative'>
                <div>
                    <div className='rounded-[10px] mb-2 w-[4px] h-[20px] bg-black relative left-[35%] animate-bounce'></div>
                    <div className='rounded-[50%] w-[10px] h-[10px] bg-[#2A47E3] mb-2'></div>
                    <div className='rounded-[50%] w-[10px] h-[10px] bg-[#2A47E3] mb-2'></div>
                    <div className='rounded-[50%] w-[10px] h-[10px] bg-[#2A47E3] mb-2'></div>
                </div>
                
                <div className='absolute bottom-0 right-[50px] rotate-[90deg]'>
                    <div className='rounded-[50%] w-[10px] h-[10px] bg-[#D06746] mb-2'></div>
                    <div className='rounded-[50%] w-[10px] h-[10px] bg-[#D06746] mb-2'></div>
                    <div className='rounded-[50%] w-[10px] h-[10px] bg-[#D06746] mb-4'></div>
                    <div className='rounded-[10px] mb-2 w-[4px] h-[20px] bg-black relative left-[35%] animate-bounce'></div>
                </div>
            </div>
        </>
    )
}

export default LineSide;