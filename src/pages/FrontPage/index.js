import React, { useEffect, useRef } from 'react';
import {Github,LinkIn,Facebook,Html,Css,Tailwind,Javascript,Typescript,ReactJs,NodeJs,MongoDb,Picture1,ArrowDown} from '../../utilities/PNG'

const FrontPage = ({ clickNavi, forExplore, setIconLink }) => {

    const TechStack = [Html,Css,Tailwind,Javascript,Typescript,ReactJs,NodeJs,MongoDb];
    const refDiv = useRef();
    const refIcon = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((intersect) => {
            if(intersect[0].isIntersecting){
                clickNavi(0);
            }
            
        });

        observer.observe(refDiv.current);

        const observe2 = new IntersectionObserver((intersect) => {
            setIconLink(!intersect[0].isIntersecting);
        });

        observe2.observe(refIcon.current);
    }, [])

    return (
        <>  
            <div className='mx-auto max-w-[1000px] py-[100px] flex items-center relative' style={{ height: '100vh' }}>
                <div ref={ refDiv } className='bg-black absolute top-0'></div>
                <div>
                    <div className='flex'>
                        <div className='w-[65%]'>
                            <p className=' text-[49px] text-[#241F1F] tittleT' style={{ lineHeight: '54px', letterSpacing: '6px' }} >FRONT-END WEB DEVELOPER</p>
                            <p className=' text-[16px] pt-3 pb-5'>Hi I'm Kyle Matthew S. Velarde A passionate Web Developer from the Philippines</p>
                            <div ref={refIcon} className='flex'>
                                {
                                    [Github, Facebook].map((a, i) => 
                                        <img src={ a } alt='loc' className='cursor-pointer h-[30px] mr-[16px]' />
                                    )
                                }
                            </div>
                        </div>
                        <div className='w-[35%] flex justify-center'>
                            <img src={ Picture1 } alt='pic' className=' rounded-[50%]' />
                        </div>
                    </div>

                    <div className='mt-[50px] mb-[50px]'>
                        <div className='flex items-center'>
                            <div className='flex'>
                                <p className='font-bold text-[17px]'>Current Tech Stack</p>
                                <div className='w-[2px] h-[20px] rounded-[10px] bg-black ml-[13px] mr-[20px] mt-1'></div>
                            </div>

                            {
                                TechStack.map((a, i) => <img src={a} alt='stack' className='h-[30px]' style={{ marginRight: i+1 < TechStack.length ? '35px':'0px'  }} />)
                            }
                        </div>

                        <p className='mt-[25px] text-[15px] text[#3E3232]'>Greetings to my online platform. Here, you'll discover comprehensive insights into my journey of professional growth and personal advancement. Offering valuable concepts about myself and the project I’ve made. Your presence on my website is highly valued. Thank you for exploring, and I wish you a wonderful day ahead!</p>
                    </div>
                    {
                        forExplore === 0 ?
                        <div className='w-full absolute bottom-[1%] flex justify-center'>
                            <div onClick={ () => clickNavi(1) } className='cursor-pointer'>
                                <p className='font-bold text-[18px] mb-2'>Click to Explore</p>
                                <div className='flex justify-center'>
                                    <img src={ ArrowDown } alt='down' className='h-[32px] animate-bounce' />
                                </div>
                            </div>
                        </div>
                        :
                        '' 
                    }
                </div>
            </div>
        </>
    )
}

export default FrontPage;