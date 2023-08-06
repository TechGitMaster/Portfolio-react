import React, { useState, useRef } from 'react';
import Header from './pages/Header';
import FrontPage from './pages/FrontPage';
import LineSide from './Components/sideLineNavigation';
import About from './pages/About';
import LeftLineNavigation from './Components/leftLineNavigation'
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    const [forExplore, setForExplore] = useState(0);
    const [iconLink, setIconLink] = useState(false);

    const refs = [useRef(), useRef(), useRef(), useRef()];

    const clickNavi = (count) => {
        setForExplore(count);

        setTimeout(() => {
            if(count > 0){
                window.scrollTo({ top: refs[count].current.offsetTop });
            }else{
                window.scrollTo(0,0);
            }
        }, 200);
    } 

    return (
        <>
            <div className='min-h-[100vh] select-none'>
                <div className='fixed w-full bg-white' style={{ zIndex: '10' }}>
                    <Header forExplore={ forExplore } clickNavi={ clickNavi } />
                </div>
                <div className='fixed right-[2%] pt-[100px] h-[100vh] flex'>
                    <LineSide />
                </div>
                {
                    iconLink ?
                    <div className='fixed h-[100vh] flex items-center'>
                        <LeftLineNavigation />
                    </div>
                    :
                    ''
                }

                <div ref={ refs[0] }>
                    <FrontPage clickNavi={ clickNavi } forExplore={ forExplore } setIconLink={ setIconLink }  />
                </div>

                {
                    forExplore > 0 ? 
                    <div>
                        <div ref={ refs[1] }>
                            <About />
                        </div>
                        <div ref={ refs[2] }>
                            <Projects />
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