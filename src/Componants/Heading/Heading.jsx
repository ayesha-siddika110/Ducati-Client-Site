import React from 'react';

const Heading = ({heading, paragraph, colorwhite,widthfull}) => {
    return (
        <div className={`py-10 ${colorwhite ? 'text-white' : 'text-black'}`}>
            <h1 className="text-4xl font-bold text-center pb-3">{heading}</h1>
            <p className={`text-center  text-gray-600 text-base  ${widthfull ? 'w-[95%]' : 'lg:w-[60%] md:w-[80%] w-[95%]'}  m-auto ${colorwhite ? 'text-white' : 'text-black'}`}>{paragraph}</p>
            
        </div>
    );
};

export default Heading;