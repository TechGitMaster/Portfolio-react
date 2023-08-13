import React, { useState, useRef, useEffect } from 'react';
import Header from './pages/Header';
import FrontPage from './pages/FrontPage';
import LineSide from './Components/sideLineNavigation';
import About from './pages/About';
import LeftLineNavigation from './Components/leftLineNavigation'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BurgerNavi from './Components/BurgerNavi';

const App = () => {
    const [forExplore, setForExplore] = useState(0);
    const [iconLink, setIconLink] = useState(false);
    const [NBurgerNavi, setNBurgerNavi] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const refs = [useRef(), useRef(), useRef(), useRef()];

    const clickNavi = (count) => {
        setNBurgerNavi(false);
        setForExplore(count);

        setTimeout(() => {
            if(count > 0){
                window.scrollTo({ top: refs[count].current.offsetTop });
            }else{
                window.scrollTo(0,0);
            }
        }, 200);
    } 

    const clicknaviB = () => {
        setNBurgerNavi(true);
    }


    //Determine size of browser___________
    useEffect(() => {   
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className='min-h-[100vh] select-none'>
                <div className='fixed w-full bg-white' style={{ zIndex: '10' }}>
                    <Header forExplore={ forExplore } 
                        clickNavi={ clickNavi } 
                        windowSize={ windowSize } clicknaviB={ clicknaviB } />
                </div>
                <div className='fixed right-[2%] pt-[100px] h-[100vh] flex'>
                    <LineSide windowSize={ windowSize } />
                </div>
                {
                    NBurgerNavi ?
                    <div className='fixed w-full' style={{ zIndex: '12' }}>
                        <BurgerNavi clickNavi={ clickNavi } 
                            setNBurgerNavi={ setNBurgerNavi } />
                    </div>
                    :
                    ''
                }
                {
                    iconLink && windowSize > 766 ?
                    <div className='fixed h-[100vh] flex items-center'>
                        <LeftLineNavigation />
                    </div>
                    :
                    ''
                }

                <div ref={ refs[0] }>
                    <FrontPage clickNavi={ clickNavi } 
                            forExplore={ forExplore } 
                            setIconLink={ setIconLink }  />
                </div>

                {
                    forExplore > 0 ? 
                    <div>
                        <div ref={ refs[1] }>
                            <About />
                        </div>
                        <div ref={ refs[2] }>
                            <Projects windowSize={ windowSize } />
                        </div>
                        <div ref={ refs[3] }>
                            <Contact />
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </>
    )
}

export default App;