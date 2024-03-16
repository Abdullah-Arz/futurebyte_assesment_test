import React, { useState } from 'react'

function Profile() {

    const [state_Selected, setState_Selected] = useState('')

    const user = require('../Assets/Images/user1.png');
    const dot = require('../Assets/Images/dots.png');
    const profile = require('../Assets/Images/profile.png');
    const call = require('../Assets/Images/map.png');
    const social = require('../Assets/Images/social.png');
    const content = require('../Assets/Images/content.png');
    const action = require('../Assets/Images/action.png');
    const wp = require('../Assets/Images/ic_whatsapp.png');



    const data = [
        {
            id:1,
            title: 'Dashboard',
            icon: require('../Assets/Images/dash.png'),
        },
        {
            id:2,
            title: 'Tasks',
            icon: require('../Assets/Images/dash.png'),
        },
        {
            id:3,
            title: 'Invoice',
            icon: require('../Assets/Images/invoices.png'),
        },
        {
            id:4,
            title: 'Files',
            icon: require('../Assets/Images/files.png'),
        },
        {
            id:5,
            title: 'Events',
            icon: require('../Assets/Images/events.png'),
        },
        {
            id:6,
            title: 'Teams',
            icon: require('../Assets/Images/teams.png'),
        },
        {
            id:7,
            title: 'Message',
            icon: require('../Assets/Images/messages.png'),
        },
        {
            id:8,
            title: 'Settings',
            icon: require('../Assets/Images/settings.png'),
        }
    ]

    const handleSelected = (data) => {
        setState_Selected(data)
    }

  return (
    <div className='flex flex-col items-center justify-center'>
    <div>
    <div className='flex items-center justify-between'>
        <img src={user} className='w-12 h-12 rounded-full' />
        <img src={dot} className='w-12 h-12 rounded-full' />
    </div>

    <div className='flex items-center justify-center flex-col mt-7'>
    <img src={profile} className='w-28 h-28 rounded-full' />
    <p className='font-bold text-[#6B7A99] text-md mt-5'>Hello Alfred Bryant</p>
    <p className='text-[#ADB8CC] text-md font-semibold mt-2'>adrain.nader@yahoo.com</p>
    </div>

    <div className='grid grid-cols-2 mt-8'>

    {
    data.map((item, index) => {
        const isFirstRow = index < 2;
        const isLastRow = index >= data.length - 2;

        return (
            <div 
                key={index} 
                onClick={() => handleSelected(item.title)} 
                className={`cursor-pointer border-2 border-[#dedede] px-7 w-full h-28 flex flex-col items-center justify-center 
                    ${state_Selected === item.title ? 'bg-white shadow-lg border-none rounded-lg' : 'bg-transparent'}
                    ${isFirstRow ? (index === 0 || index === 3 ? 'rounded-tl-lg' : 'rounded-tr-lg') : ''}
                    ${isLastRow ? (index === data.length - 1 || index === data.length - 4 ? 'rounded-br-lg' : 'rounded-bl-lg') : ''}
                `}
            >
                <img 
                    src={item.icon} 
                    className={`w-5 h-4 ${state_Selected === item.title ? 'invert' : ''}`} 
                    alt={item.title} 
                />
                <p className={`text-[#ADB8CC] text-[10px] font-bold mt-6 ${state_Selected === item.title ? 'text-black' : ''}`}>{item.title}</p>
            </div>
        );
    })
}

        
    </div>
    </div>

    <div className='mt-20'>
    <div className='w-48 flex items-center justify-around border-2 py-4 px-2 border-[#dedede] rounded-full'>
        <img src={call} className='w-4 h-4' />
        <img src={social} className='w-4 h-4' />
        <img src={content} className='w-5 h-4' />
        <img src={action} className='w-5 h-4' />
        <img src={wp} className='w-6 h-6' />
    </div>
    </div>

    </div>
  )
}

export default Profile