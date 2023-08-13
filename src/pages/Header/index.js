import React, { useState, useEffect } from 'react';
import { Burger } from '../../utilities/PNG';

const Header = ({ forExplore, clickNavi, windowSize, clicknaviB }) => {
    const [titleConFirst, setTitleConFirst] = useState(false);
    const [naviHide, setNaviHide] = useState(false);


    useEffect(() => {
        if(!titleConFirst && forExplore > 0) setTitleConFirst(true);

        setTimeout(() => {
            setNaviHide(forExplore > 0 ? true: false);
        }, 1000)
    }, [forExplore])

    return (
        <>
            <div className='mx-auto max-w-[1350px] py-2 flex relative'>
                <div className={forExplore > 0 ? 'headerTitle': titleConFirst ? 'headderCenterTitle': 'headerFinalCenterFirst'} 
                style={{ marginTop: windowSize <= 766 ? '5px':'' }}>
                    <p className='md:text-[25px] text-[20px] text-[#241F1F] ml-3 nameT'>Matthew.dev</p>
                </div>

                {
                    naviHide > 0 ? 
                    <div>
                        {
                            windowSize > 766 ?
                            <div className={ forExplore > 0  ? 'flex mt-1 headerNavigation pr-3':'flex mt-1 headerNavigationHide'}>
                            {
                                'Home,About,Projects,Contact'.split(',').map((a, i) => 
                                <div onClick={ () => clickNavi(i) } className='cursor-pointer' style={{ marginRight: i < 3 ? '25px':'0px' }}>
                                    <p className='text-[17px] font-semibold'>{a}</p>
                                </div>)
                            }
                            </div>
                            :
                            <div onClick={ () => clicknaviB(true) }>
                                <img src={ Burger } 
                                alt='icon' 
                                className={ forExplore > 0  ? 'h-[25px] cursor-pointer flex mt-1 headerNavigation pr-3':'h-[25px] cursor-pointer flex mt-1 headerNavigationHide pr-3'}/>
                            </div>

                        }
                    </div>
                    :
                    ''
                }
            </div>
        </>
    )
}

export default Header;