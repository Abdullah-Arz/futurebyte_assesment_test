import React, { useState } from 'react';

function Header() {
    const [selected, setSelected] = useState('home');

    const image = require('../Assets/Images/logo.png');
    const image1 = require('../Assets/Images/lang.png');
    const image2 = require('../Assets/Images/stroke.png');

    const selectedNavBar = (data) => {
        setSelected(data);
    };

    return (
        <div className='hidden grid-cols-3 py-6 px-20 2xl:grid xl:grid lg:grid md:grid sm:hidden'>
            <div>
                <img src={image} className='w-32 h-10' />
            </div>

            <div className='flex flex-row justify-between px-10 items-center'>
                <p className={`cursor-pointer ${selected === 'home' ? 'border-b-4 border-[#F4711E]' : ''}`} onClick={() => selectedNavBar('home')}>Home</p>
                <p className={`cursor-pointer ${selected === 'career' ? 'border-b-4 border-[#F4711E]' : ''}`} onClick={() => selectedNavBar('career')}>Careers</p>
                <p className={`cursor-pointer ${selected === 'pricing' ? 'border-b-4 border-[#F4711E]' : ''}`} onClick={() => selectedNavBar('pricing')}>Pricing</p>
                <p className={`cursor-pointer ${selected === 'feature' ? 'border-b-4 border-[#F4711E]' : ''}`} onClick={() => selectedNavBar('feature')}>Features</p>
            </div>

            <div className='flex items-center justify-end'>
                <div className='flex items-center justify-between w-24'>
                    <img src={image1} className='w-5 h-5' />
                    <p className='text-lg'>English</p>
                    <img src={image2} className='w-3 h-2' />
                </div>

                <div className='px-4'>|</div>

                <div className='flex items-center justify-between w-48'>
                    <img src={image1} className='w-4 h-4' />
                    <p>Log In</p>
                    <button className='border-2 border-[#FF9002] rounded-md px-5 py-3'>Get Demo</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
