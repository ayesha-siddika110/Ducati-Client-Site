import React from 'react';
import useTheme from '../../../Hooks/useTheme';

const MadeEasyCard = ({icon,firstline,secondeLine}) => {
    const {color} = useTheme()
    return (
        <div className='text-white space-y-2'>
            <div className='bg-white p-4 rounded-full w-[60px] h-[60px] m-auto flex justify-center items-center'>
                
                    <p className='bg-[#D1E9FF] text-2xl p-3 rounded-full' style={{color: color?.primary}}>{icon}</p>
               
                   
              
            </div>
            <div className='space-y-2 '>
            <p className='text-center text-lg'>{firstline}</p>
            <p className='text-gray-200 text-sm font-normal text-center'>{secondeLine}</p>
            </div>
            
        </div>
    );
};

export default MadeEasyCard;