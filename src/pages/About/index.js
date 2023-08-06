import React from 'react';
import { Picture2, WaveArm, Angular,Bootstrap,CSharp,SpringBoot,Java,Mysql,Php,Unity } from '../../utilities/PNG';

const About = () => {

    const TechStack = [Angular,Bootstrap,CSharp,SpringBoot,Java,Mysql,Php,Unity];

    return (
        <>
            <div className='mt-[90px] mx-auto pb-[100px] max-w-[1000px]'>
                <div className='flex'>
                    <div className='w-[55%]'>
                        <img src={ Picture2 } alt='pict2' className='w-[95%]' />
                    </div>
                    <div className='w-[45%]'>
                        <div className='flex items-center'>
                            <p className='text-[#2A47E3] text-[20px] tittleT'>About Me</p>
                            <img src={ WaveArm } alt='arm' className='h-[35px] ml-1' />
                        </div>

                        <p className='text-[#241F1F] text-[25px] font-bold mt-2 mb-3' style={{ lineHeight: '33px' }}>A Dedicated Front-End Developer with passionate and creativity </p>
                        <p className='text-[#463737] text-[15px]' style={{ lineHeight: '25px', letterSpacing: '1px' }}>I am a junior Front-End Developer with a strong skill set including HTML, CSS, JavaScript, React, Tailwind and NodeJS. I have a knack for creating and managing responsive websites that deliver seamless user experiences. My specialty involves creating lively interfaces using clean, efficient code and leveraging modern development practices. Collaboration is important to me, I value input from teammates and am committed to enhancing and delivering web applications.</p>
                    </div>
                </div>

                <div className='mt-[55px]'>
                    <p className='text-[#D06746] text-[20px] tittleT'>Experienced with Various Technology Stacks</p>
                    <p className='w-[80%] text-[#241F1F] font-bold text-[15px] mt-3 mb-5'>I wanted you to read this at the moment to introduce and highlight my experience with various technology stacks, including some that I have worked with in the past but may require refreshing.</p>
                    <p className='w-[90%] text-[#463737] text-[15px]' style={{ letterSpacing: '1px' }}>My grasp of software development is strong, built upon years of accumulating in-depth expertise in various programming languages and frameworks. Throughout my journey, I've acquired extensive knowledge and practical skills. Here are my few technology stacks that I've experienced:</p>
                    
                    <div className='flex items-center mt-12'>
                        <div className='flex'>
                            <p className='font-bold text-[17px]'>Tech Stack</p>
                            <div className='w-[2px] h-[20px] rounded-[10px] bg-black ml-[13px] mr-[20px] mt-1'></div>
                        </div>
                        {
                            TechStack.map((a, i) => <img src={a} alt='stack' className='h-[35px]' style={{ marginRight: i+1 < TechStack.length ? '35px':'0px'  }} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;