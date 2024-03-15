import React, { useState } from 'react';

function Header1() {
    const [selected, setSelected] = useState('home');

    const image = require('../Assets/Images/logo.png');
    const image1 = require('../Assets/Images/lang.png');
    const image2 = require('../Assets/Images/stroke.png');
    const Icon = require('../Assets/Images/Icon.png');
    const search = require('../Assets/Images/search.png');
    const bell = require('../Assets/Images/bell.png');
    const close = require('../Assets/Images/close.png');
    const user = require('../Assets/Images/user.png');

    const selectedNavBar = (data) => {
        setSelected(data);
    };

    return (
        <div className='flex flex-row justify-between py-6 px-7 bg-[#EDEFF2] border-b-2 border-[#EDEFF2]'>

            <div className='flex flex-row justify-around'>
            <div className='bg-[#ffffff] w-10 h-10 rounded-full shadow-md flex items-center justify-center'>
                <img src={Icon} className='w-4 h-4' />
            </div>

            <div className='ml-5'>
                <img src={image} className='w-32 h-10' />
            </div>
            </div>

            <div className='flex flex-row justify-between items-center w-3/12'>
                <p className={`cursor-pointer text-[#7D8FB3] text-md font-semibold `} >Dashboard</p>
                <p className={`cursor-pointer text-[#7D8FB3] text-md font-semibold `} >About Us</p>
                <p className={`cursor-pointer text-[#7D8FB3] text-md font-semibold `} >News</p>
                <p className={`cursor-pointer text-[#7D8FB3] text-md font-semibold `}>User Policy</p>
                <p className={`cursor-pointer text-[#7D8FB3] text-md font-semibold `}>Contacts</p>
            </div>

            <div className='bg-white rounded-full h-10 w-96 flex items-center justify-start ml-10'>
                <img src={search} className='w-5 h-5 ml-2 mr-1' />
                <input 
                placeholder='Search Transactions and Documents'
                name='search'
                className='outline-none bg-white rounded-full h-10 w-72 flex items-center justify-center text-sm text-[#7D8FB3] font-semibold placeholder:text-sm placeholder:font-semibold placeholder:text-[#7D8FB3]'
                />
            </div>

            <div className='flex items-center justify-center'>
            
            <div className='flex items-center justify-between'>
            <div className='bg-[#ffffff] w-10 h-10 rounded-full shadow-md flex items-center justify-center mr-2'>
                <img src={user} className='w-4 h-4' />
            </div>
            <p className='text-[#7D8FB3] font-semibold text-sm mr-2'>Clayton Santos</p>
            </div>

            <div className='bg-[#ffffff] w-10 h-10 rounded-full shadow-md flex items-center justify-center mr-2'>
                <img src={bell} className='w-4 h-4' />
            </div>

            <div className='bg-[#ffffff] w-10 h-10 rounded-full shadow-md flex items-center justify-center'>
                <img src={close} className='w-4 h-4' />
            </div>
            </div>
        </div>
    );
}

export default Header1;
