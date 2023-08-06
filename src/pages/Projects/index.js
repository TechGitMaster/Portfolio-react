import React, { useState } from 'react';
import { Angular, ReactJs, Javascript, Android, TradingCrypto, Github2, ScaleUp } from '../../utilities/PNG';

const Projects = () => {
    const [iconSelected, setIconSelected] = useState(0);
    const iconStack = [[Angular, 'Angular'], [ReactJs, 'React'], [Javascript, 'Javascript'], [Android, 'Android App']];
    const [animate, setAnimate] = useState(true);

    const projectArr = [
        [
            [TradingCrypto, 'Hotel Reservation', 'This web app will also offer that focused on appointment and reservation. Most of the transaction in this project is about the client and broker by means of site visits and unit prices.',
            ['Angular', 'Typescript', 'NodeJs'], [['Code', Github2]] ],
            [TradingCrypto, 'Demon Slayer', 'A Demon Slayer SPA (single-page app) is a web app where you can see the characters of the demon slayers moreover you can see the information of the characters, breathing style type and upper rank demons that have in demon slayer anime.',
            ['Angular', 'Typescript', 'Bootstrap'], [['Code', Github2], ['Live Demo', ScaleUp]] ],
            [TradingCrypto, "Miss Kobayashi's Dragon Maid", "A SPA (single-page app) Miss Kobayashi's Dragon Maid is a web app where you will see all the characters in Kobayashi anime, moreover you can see all the cute characters inlcuding Kanna Kamui and Riko Saikawa along with their information on what character they have on anime.",
            ['Angular', 'Typescript', 'Bootstrap'], [['Code', Github2], ['Live Demo', ScaleUp]] ]
        ],

        [
            [TradingCrypto, 'Trading Crypto.Hunk', 'A SPA (single-page app) crypto trading web that you will see all the current markets and trading powered with API CoinGecko.',
            ['React', 'Redux', 'Tailwind'], [['Code', Github2], ['Live Demo', ScaleUp]] ],
            [TradingCrypto, 'Thesisary Web App', 'The aim of this website is to post the best research, and showcasing all the research that the students have been made. Moreover the student can see and rate the research if they want to.',
            ['React', 'Typescript', 'Tailwind', 'NodeJs'], [['Code', Github2], ['Live Demo', ScaleUp]] ]
        ],

        [
            [TradingCrypto, 'Pacman Game', "The Pacman Game is based only on it's own criteria. The game have only one level. Only goal you must do is to eat all the foods of the pacman and try not to catch by the ghost hunter and win the game.",
            ['Html', 'Css', 'Javascript'], [['Code', Github2], ['Live Demo', ScaleUp]] ],
        ],

        [
            [TradingCrypto, 'Augmented Reality for Hotel Rooms', "AR, also known as Augmented Reality that can showcase the tour in the units, it's facilities and the squere meters in every condominium. This App can also play a role to design your room using the furniture available on this app.",
            ['Unity', 'Java', 'C#'], [['Watch Video', ScaleUp]] ], 
            [TradingCrypto, 'NCovid19', "The app is showcasing the numbers infected by the ncovid19 around the work. The app was build on year 2020 so that's why the data is the least number infected than we have today.",
            ['Android Studio', 'Java'], [['Code', Github2], ['Watch Video', ScaleUp]] ]
        ]
    ];
    
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
            <div className={`mx-auto max-w-[1000px] mt-[100px] pb-[100px] overflow-hidden`}>
                <p className='text-[#2A47E3] text-[20px] tittleT'>Projects</p>
                <p className='text-[#241F1F] text-[25px] font-bold'>Each project is a quality peace of development</p>

                <div className='mt-8 flex flex-wrap'>
                    {
                        iconStack.map((a, i) => 
                        <div onClick={ () => selectedStack(i) } 
                        className='flex items-center cursor-pointer rounded-[12px] py-2 px-[20px]' 
                        style={{ background: iconSelected === i ? '#FFCDBE': 'none'}}>

                            <img src={ a[0] } alt='con' className='h-[30px] mr-2' />
                            <p className='text-[15px] font-bold'>{ a[1] }</p>

                        </div>)

                    }
                </div>

                <div className={`mx-auto max-w-[900px] ${ !animate ? 'projectOut':'projectIn' }`}>
                    {
                        projectArr[iconSelected].map((a, i)=> 
                            i % 2 === 0 ? 
                            <div className='flex items-center mt-[100px]'>
                                <div className='mr-10 w-[60%]'>
                                    <img src={ a[0] } alt='projects' className='h-[300px] rounded-[20px]' />
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
                                        
                                            <div className='flex items-center cursor-pointer' style={{ marginRight: i < a[4].length-1 ? '30px':'0px'}}>
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
                                        
                                            <div className='flex items-center cursor-pointer' style={{ marginRight: i < a[4].length-1 ? '30px':'0px'}}>
                                                <p className='font-bold text-[15px] mr-2'>{ b[0] }</p>
                                                <img src={ b[1] } alt='icon' className='h-[32px]' />
                                            </div>

                                            )
                                        }

                                    </div>
                                </div>
                                <div className='ml-10 w-[60%] '>
                                    <img src={ a[0] } alt='projects' className='h-[300px] rounded-[20px]' />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Projects;