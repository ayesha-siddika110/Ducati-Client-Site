import React from 'react';
import useTheme from '../../../Hooks/useTheme';
import { IoArrowForward } from 'react-icons/io5';

const LatestUpdateCard = ({img, date, title, description, isbig}) => {
    const {color} = useTheme()
    return (
        <div className='space-y-4'>
            <img src={img} alt="news image" className='max-h-[300px] rounded-2xl w-full object-cover' />

            <div className='space-y-4'>
                <p className={"text-lg font-semibold" } style={{color: color?.primary}}>{date}</p>
                <div className='flex items-center gap-10 justify-between'>

                <p className='text-2xl font-semibold'>{title}</p>
                <IoArrowForward className='-rotate-45 text-3xl' />
                </div>
                <p className='text-base '>{description}</p>
            </div>
            
        </div>
    );
};

export default LatestUpdateCard;