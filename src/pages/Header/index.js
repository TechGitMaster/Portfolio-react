import React, { useState, useEffect } from 'react';

const Header = ({ forExplore, clickNavi }) => {
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
                <div className={forExplore > 0 ? 'headerTitle': titleConFirst ? 'headderCenterTitle': 'headerFinalCenterFirst'}>
                    <p className='text-[25px] text-[#241F1F] nameT'>Matthew.dev</p>
                </div>

                {
                    naviHide > 0 ? 
                    <div className={ forExplore > 0  ? 'flex mt-1 headerNavigation':'flex mt-1 headerNavigationHide'}>
                    {
                        'Home,About,Projects,Contact'.split(',').map((a, i) => 
                        <div onClick={ () => clickNavi(i) } className='cursor-pointer' style={{ marginRight: i < 3 ? '25px':'0px' }}>
                            <p className='text-[17px] font-semibold'>{a}</p>
                        </div>)
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