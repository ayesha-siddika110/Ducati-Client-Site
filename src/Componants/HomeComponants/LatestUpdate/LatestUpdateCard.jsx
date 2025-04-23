import React from 'react';
import useTheme from '../../../Hooks/useTheme';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router';

const LatestUpdateCard = ({item, date, title, description, isbig}) => {
    const {color} = useTheme()
    return (
        <Link to={`blogDetailsPage/${item._id}`} className={`space-y-4 rounded-3xl group ${isbig ? '' : 'flex md:flex-row flex-col gap-4  '} `}>
            <img src={item?.images[0]} alt="news image" className={`max-h-[300px] rounded-2xl  ${isbig ? 'w-full h-[220px]' : 'md:w-[50%] h-[220px]'} object-cover h-full  transition-transform duration-300 ease-in-out group-hover:scale-95`} />

            <div className='space-y-4'>
                <p className={"text-lg font-semibold" } style={{color: color?.primary}}>{date}</p>
                <div className='flex items-center gap-10 justify-between'>

                <p className={`text-2xl font-semibold ${isbig || 'text-lg'}`}>{title}</p>
                <IoArrowForward className='-rotate-45 text-3xl' />
                </div>
                <p
  className={`text-base ${!isbig ? 'text-sm' : ''}`}
  dangerouslySetInnerHTML={{ __html: description.slice(0,150) }}
/>...
            </div>
            
        </Link>
    );
};

export default LatestUpdateCard;