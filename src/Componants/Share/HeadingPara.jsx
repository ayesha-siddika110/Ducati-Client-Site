import React from 'react';

const HeadingPara = ({heading, para}) => {
    return (
        <div className='py-10  text-center'>
            <h1 className='text-4xl text-center '>{heading}</h1>
            <p className='md:w-[60%] w-[80%] m-auto text-gray-600'>{para}</p>
        </div>
    );
};

export default HeadingPara;