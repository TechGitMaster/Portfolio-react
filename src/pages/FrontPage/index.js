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
            <div className='mx-auto max-w-[1000px] md:pt-[100px] md:pb-[100px] pt-[70px] md:mb-0 mb-[100px] md:px-0 px-3 flex md:items-center relative' style={{ height: '100vh' }}>
                <div ref={ refDiv } className='bg-black absolute top-0'></div>
                <div>
                    <div className='md:flex'>
                        <div className='md:w-[65%]'>
                            <p className='md:text-[49px] text-[30px] md:text-left text-center text-[#241F1F] tittleT' style={{ lineHeight: '54px', letterSpacing: '6px' }} >FRONT-END WEB DEVELOPER</p>
                            <p className=' text-[16px] pt-3 pb-5 md:text-left text-center md'>Hi I'm Kyle Matthew S. Velarde A passionate Web Developer from the Philippines</p>
                            <div className='md:block hidden'>
                                <div ref={refIcon} className='flex'>
                                    {
                                        [[Github, 'https://github.com/TechGitMaster?tab=repositories'], [Facebook, 'https://www.facebook.com/kylemattVelarde/']].map((a, i) => 
                                            <img src={ a[0] } onClick={ () => window.open(a[1], '_blank') } alt='loc' className='cursor-pointer h-[30px] mr-[16px]' />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[35%] flex justify-center'>
                            <img src={ Picture1 } alt='pic' className='md:max-h-full max-h-[250px] rounded-[50%] md:mt-0 mt-[10px]' />
                        </div>
                    </div>

                    <div className='mt-[50px] mb-[50px]'>
                        <div className='md:flex items-center'>
                            <div className='flex'>
                                <p className='font-bold sm:text-[17px] text-[15px]'>Current Tech Stack</p>
                                <div className='w-[2px] h-[20px] rounded-[10px] bg-black md:ml-[13px] ml-[10px] mr-[20px] mt-1'></div>
                            </div>
                            
                            <div className='flex flex-wrap md:mt-0 mt-5'>
                            {
                                TechStack.map((a, i) => <img src={a} alt='stack' className='h-[30px] my-2' style={{ marginRight: i+1 < TechStack.length ? '35px':'0px'  }} />)
                            }
                            </div>
                        </div>

                        <p className='mt-[25px] sm:text-[15px] text-[14px] text[#3E3232]'>Greetings to my online platform. Here, you'll discover comprehensive insights into my journey of professional growth and personal advancement. Offering valuable concepts about myself and the project I’ve made. Your presence on my website is highly valued. Thank you for exploring, and I wish you a wonderful day ahead!</p>
                    </div>
                    {
                        forExplore === 0 ?
                        <div className='w-full absolute md:bottom-[1%] -bottom-[12%] right-0 flex justify-center '>
                            <div onClick={ () => clickNavi(1) } className='cursor-pointer'>
                                <p className='font-bold md:text-[18px] text-[16px] mb-2'>Click to Explore</p>
                                <div className='flex justify-center'>
                                    <img src={ ArrowDown } alt='down' className='md:h-[32px] h-[30px] animate-bounce' />
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