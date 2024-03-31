import React from 'react';
import { Picture2, WaveArm, Angular,Bootstrap,CSharp,SpringBoot,Java,Mysql,Php,Unity,ReactJs,NodeJs,MongoDb } from '../../utilities/PNG';

const About = () => {

    const TechStack = [Angular,CSharp,SpringBoot,Java,Unity,ReactJs,NodeJs,MongoDb];

    return (
        <>
            <div className='md:mt-[90px] mt-[170px] mx-auto pb-[100px] max-w-[1000px] px-3'>
                <div className='md:flex'>
                    <div className='md:w-[55%]'>
                        <img src={ Picture2 } alt='pict2' className='md:mt-0 mt-[50px] md:w-[95%]' />
                    </div>
                    <div className='md:w-[45%]'>
                        <div className='flex items-center md:my-0 my-4'>
                            <p className='text-[#2A47E3] md:text-[20px] text-[18px] tittleT'>About Me</p>
                            <img src={ WaveArm } alt='arm' className='md:h-[35px] h-[30px] ml-1' />
                        </div>

                        <p className='text-[#241F1F] md:text-[25px] text-[20px] font-bold mt-2 mb-3' style={{ lineHeight: '33px' }}>A Dedicated Front-End Developer with passionate and creativity </p>
                        <p className='text-[#463737] md:text-[15px] text-[14px]' style={{ lineHeight: '25px', letterSpacing: '1px' }}>I am a junior Front-End Developer with a strong skill set including HTML, CSS, JavaScript, Typescript, Vuejs, Tailwind and Gitlab for version control. I have a knack for creating and managing responsive websites that deliver seamless user experiences. My specialty involves creating lively interfaces using clean, efficient code and leveraging modern development practices. Collaboration is important to me, I value input from teammates and am committed to enhancing and delivering web applications.</p>
                    </div>
                </div>

                <div className='md:mt-[55px] mt-[40px]'>
                    <p className='text-[#D06746] md:text-[20px] text-[18px] tittleT'>Experienced with Various Technology Stacks</p>
                    <p className='md:w-[80%] text-[#241F1F] font-bold md:text-[15px] text-[14px] mt-3 mb-5'>I wanted you to read this at the moment to introduce and highlight my experience with various technology stacks, including some that I have worked with in the past but may require refreshing.</p>
                    <p className='md:w-[90%] text-[#463737] md:text-[15px] text-[14px]' style={{ letterSpacing: '1px' }}>My grasp of software development is strong, built upon years of accumulating in-depth expertise in various programming languages and frameworks. Throughout my journey, I've acquired extensive knowledge and practical skills. Here are my few technology stacks that I've experienced:</p>
                    
                    <div className='md:flex items-center mt-12'>
                        <div className='flex'>
                            <p className='font-bold md:text-[17px] text-[15px]'>Tech Stack</p>
                            <div className='w-[2px] h-[20px] rounded-[10px] bg-black md:ml-[13px] ml-[10px] mr-[20px] mt-1'></div>
                        </div>
                        <div className='flex flex-wrap md:mt-0 mt-5'>
                        {
                            TechStack.map((a, i) => <img src={a} alt='stack' className='md:h-[35px] h-[30px] my-3' style={{ marginRight: i+1 < TechStack.length ? '35px':'0px'  }} />)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;