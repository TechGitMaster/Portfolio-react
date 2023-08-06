import React from "react";
import { Github,LinkIn, Facebook } from '../../utilities/PNG'

const LeftLineNavigation = () => {
    return (
        <>
            <div className="px-[15px]">
                {
                    [LinkIn, Github, Facebook].map((a, i) => 
                        <img src={ a } alt='loc' className='cursor-pointer h-[33px] mb-[25px]' />
                    )
                }
            </div>
        </>
    )
}

export default LeftLineNavigation;