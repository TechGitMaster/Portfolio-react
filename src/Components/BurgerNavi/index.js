import React from 'react';
import { GithubW, Facebook } from '../../utilities/PNG';

const BurgerNavi = ({ setNBurgerNavi, clickNavi }) => {
    return (
        <>
            <div className='bg-[#241F1F] h-[100vh] px-3 py-5'>
                <div className='flex justify-between'>
                    <p className='text-[22px] text-white nameT'>Matthew.dev</p>
                    <p onClick={ () => { setNBurgerNavi(false) } }  className='text-white text-[20px] font-bold cursor-pointer'>X</p>
                </div>

                <div className='mt-[30px] text-white'>
                    <div onClick={ () => clickNavi(0) } style={{ borderTop: '1px solid #896B6B' }} className='py-3 cursor-pointer'>Home</div>
                    <div onClick={ () => clickNavi(1) } style={{ borderTop: '1px solid #896B6B' }} className='py-3 cursor-pointer'>About</div>
                    <div onClick={ () => clickNavi(2) } style={{ borderTop: '1px solid #896B6B' }} className='py-3 cursor-pointer'>Projects</div>
                    <div onClick={ () => clickNavi(3) } style={{ borderTop: '1px solid #896B6B', borderBottom: '1px solid #896B6B' }} className='py-3 cursor-pointer'>Contact</div>
                </div>

                <div className='flex justify-center mt-[50px]'>
                    <img src={ GithubW } onClick={() => window.open('https://github.com/TechGitMaster?tab=repositories', "_blank")} alt='icon' className='h-[35px] mr-5 cursor-pointer' />
                    <img src={ Facebook } onClick={() => window.open('https://www.facebook.com/kylemattVelarde/', "_blank")} alt='icon' className='h-[35px] cursor-pointer' />
                </div>
            </div>
        </>
    );
}

export default BurgerNavi;