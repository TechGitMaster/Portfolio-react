import React, { useState } from 'react';
import { Angular, ReactJs, Javascript, Android, Github2, ScaleUp } from '../../utilities/PNG';
import { TradingCrypto, DemonSlayer, HotelReservation, Kobayashi, Pacman, Thesisary, Augmented, NCOVID, MindWave } from '../../utilities/SProject';

const Projects = ({ windowSize }) => {
    const [iconSelected, setIconSelected] = useState(0);
    const iconStack = [[Angular, 'Angular'], [ReactJs, 'React'], [Javascript, 'Javascript'], [Android, 'Android App']];
    const [animate, setAnimate] = useState(true);

    const projectArr = [
        [
            [HotelReservation, 'Hotel Reservation', 'This web app will also offer that focused on appointment and reservation. Most of the transaction in this project is about the client and broker by means of site visits and unit prices.',
            ['Angular', 'Typescript', 'NodeJs'], [['Code', Github2, 'https://github.com/TechGitMaster/Hotel-Reservation.git']] ],
            [DemonSlayer, 'Demon Slayer', 'A Demon Slayer SPA (single-page app) is a web app where you can see the characters of the demon slayers moreover you can see the information of the characters, breathing style type and upper rank demons that have in demon slayer anime.',
            ['Angular', 'Typescript', 'Bootstrap'], [['Code', Github2, 'https://github.com/TechGitMaster/Hokaio-demonslayer.git'], ['Live Demo', ScaleUp, 'https://64d85ecdd2d5de6110d9803b--jolly-belekoy-39692f.netlify.app/']] ],
            [Kobayashi, "Miss Kobayashi's Dragon Maid", "A SPA (single-page app) Miss Kobayashi's Dragon Maid is a web app where you will see all the characters in Kobayashi anime, moreover you can see all the cute characters inlcuding Kanna Kamui and Riko Saikawa along with their information on what character they have on anime.",
            ['Angular', 'Typescript', 'Bootstrap'], [['Code', Github2, 'https://github.com/TechGitMaster/Hokaio-kobayashi.git'], ['Live Demo', ScaleUp, 'https://condescending-volhard-6c2de4.netlify.app/']] ]
        ],

        [
            [TradingCrypto, 'Trading Crypto.Hunk', 'A SPA (single-page app) crypto trading web that you will see all the current markets and trading powered with API CoinGecko.',
            ['React', 'Redux', 'Tailwind'], [['Code', Github2, 'https://github.com/TechGitMaster/TradingCrypto.Hunk.git'], ['Live Demo', ScaleUp, 'https://tradingcryptohunk.vercel.app/']] ],
            [Thesisary, 'Thesisary Web App', 'The aim of this website is to post the best research, and showcasing all the research that the students have been made. Moreover the student can see and rate the research if they want to.',
            ['React', 'Typescript', 'Tailwind', 'NodeJs'], [['Code', Github2, 'https://github.com/TechGitMaster/directory_client.git'], ['Live Demo', ScaleUp, 'https://thesisary.vercel.app/']] ],
            [MindWave, 'MindWave', 'MindWave, an AI language model powered by OpenAI, capable of understanding and generating human-like text for a variety of tasks. The knowledge is based on information available up to September 2021, and designed to provide helpful responses while adhering to ethical guidelines.',
            ['React', 'Typescript', 'NodeJs'], [['Live Demo', ScaleUp, 'https://mindwave.vercel.app']]]
        ],

        [
            [Pacman, 'Pacman Game', "The Pacman Game is based only on it's own criteria. The game have only one level. Only goal you must do is to eat all the foods of the pacman and try not to catch by the ghost hunter and win the game.",
            ['Html', 'Css', 'Javascript'], [['Code', Github2, 'https://github.com/TechGitMaster/Pacman.git'], ['Live Demo', ScaleUp, 'https://techgitmaster.github.io/Pacman/htmlPacman.html']] ],
        ],

        [
            [Augmented, 'Augmented Reality for Hotel Rooms', "AR, also known as Augmented Reality that can showcase the tour in the units, it's facilities and the squere meters in every condominium. This App can also play a role to design your room using the furniture available on this app.",
            ['Unity', 'Java', 'C#'], [['Watch Video', ScaleUp, 'https://youtu.be/K6oNmyjZUOU']] ], 
            [NCOVID, 'NCovid19', "The app is showcasing the numbers infected by the ncovid19 around the work. The app was build on year 2020 so that's why the data is the least number infected than we have today.",
            ['Android Studio', 'Java'], [['Code', Github2, 'https://github.com/TechGitMaster/NCOV19.git'], ['Watch Video', ScaleUp, 'https://youtu.be/CPDIP7A11Ik']] ]
        ]
    ];
    

    const openProjects = (link) => {
        window.open(link, "_blank");
    }


    const selectedStack = (numb) => {
        if(numb !== iconSelected){
            setAnimate(false);
            setTimeout(() => {
                setIconSelected(numb);
                setAnimate(true);
            }, 300)
        }
    }

    return (
        <>
            <div className={`mx-auto max-w-[1000px] md:mt-[100px] mt-[50px] pb-[100px] overflow-hidden px-3`}>
                <p className='text-[#2A47E3] md:text-[20px] text-[18px] tittleT'>Projects</p>
                <p className='text-[#241F1F] md:text-[25px] text-[20px] font-bold'>Each project is a quality peace of development</p>

                <div className='mt-5 flex flex-wrap'>
                    {
                        iconStack.map((a, i) => 
                        <div onClick={ () => selectedStack(i) } 
                        className='flex items-center cursor-pointer rounded-[12px] py-2 mt-3 px-[20px]' 
                        style={{ background: iconSelected === i ? '#FFCDBE': 'none'}}>

                            <img src={ a[0] } alt='con' className='h-[30px] mr-2' />
                            <p className='md:text-[15px] text-[14px] font-bold'>{ a[1] }</p>

                        </div>)

                    }
                </div>

                <div className={`mx-auto max-w-[900px] ${ !animate ? 'projectOut':'projectIn' }`}>
                    {
                        windowSize > 766 ?
                        projectArr[iconSelected].map((a, i)=> 
                            i % 2 === 0 ? 
                            <div className='flex items-center mt-[100px]'>
                                <div className='mr-10 w-[60%]'>
                                    <img src={ a[0] } alt='projects' className='w-full h-[300px] rounded-[20px] shadow-lg' />
                                </div>
                                <div className='w-[40%]'>
                                    <p className='font-bold text-[18px] text-center'>{ a[1] }</p>
                                    <p className='text-[16px] text-center mt-5'>{ a[2] }</p>
                                        <div className='flex justify-center py-[30px]'>
                                        {
                                            a[3].map((b,i) => <p className='font-bold text-[17px]' style={{ marginRight: i < a[3].length-1 ? '15px':'0px' }}>{b}</p>)
                                        }
                                    </div>
                                    <div className='flex justify-center'>
                                    
                                        {
                                            a[4].map((b, i) => 
                                        
                                            <div onClick={ () => openProjects(b[2]) } className='flex items-center cursor-pointer' style={{ marginRight: i < a[4].length-1 ? '30px':'0px'}}>
                                                <p className='font-bold text-[15px] mr-2'>{ b[0] }</p>
                                                <img src={ b[1] } alt='icon' className='h-[32px]' />
                                            </div>

                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                            :
                            <div className='flex items-center mt-[100px]'>
                                <div className='w-[40%]'>
                                    <p className='font-bold text-[18px] text-center'>{ a[1] }</p>
                                    <p className='text-[16px] text-center mt-5'>{ a[2] }</p>
                                        <div className='flex flex-wrap justify-center py-[30px]'>
                                        {
                                            a[3].map((b,i) => <p className='font-bold text-[17px] mx-[10px]' style={{ marginRight: i < a[3].length-1 ? '15px':'0px' }}>{b}</p>)
                                        }
                                    </div>
                                    <div className='flex justify-center'>
                                    
                                        {
                                            a[4].map((b, i) => 
                                        
                                            <div onClick={ () => openProjects(b[2]) } className='flex items-center cursor-pointer' style={{ marginRight: i < a[4].length-1 ? '30px':'0px'}}>
                                                <p className='font-bold text-[15px] mr-2'>{ b[0] }</p>
                                                <img src={ b[1] } alt='icon' className='h-[32px]' />
                                            </div>

                                            )
                                        }

                                    </div>
                                </div>
                                <div className='ml-10 w-[60%]'>
                                    <img src={ a[0] } alt='projects' className='w-full h-[300px] rounded-[20px] shadow-lg' />
                                </div>
                            </div>
                        )
                        :
                        projectArr[iconSelected].map((a, i) => 
                        <div className='mt-[60px]'>
                            <div>
                                <div className='bg-cover bg-center h-[300px] rounded-[20px]' style={{ backgroundImage: `url('${a[0]}')` }}></div>
                            </div>
                            <div>
                                <p className='font-bold text-[18px] mt-[15px]'>{ a[1] }</p>
                                <p className='text-[14px] mt-5'>{ a[2] }</p>
                                    <div className='flex justify-center py-[30px]'>
                                    {
                                        a[3].map((b,i) => <p className='font-bold text-[15px]' style={{ marginRight: i < a[3].length-1 ? '15px':'0px' }}>{b}</p>)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                
                                    {
                                        a[4].map((b, i) => 
                                    
                                        <div onClick={ () => openProjects(b[2]) } className='flex items-center cursor-pointer' style={{ marginRight: i < a[4].length-1 ? '30px':'0px'}}>
                                            <p className='font-bold text-[15px] mr-2'>{ b[0] }</p>
                                            <img src={ b[1] } alt='icon' className='h-[32px]' />
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Projects;