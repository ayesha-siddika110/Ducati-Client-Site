import React from 'react';
import useTheme from '../../Hooks/useTheme';

const Tooltip = ({children, text}) => {
    const {color} = useTheme()
    return (
        <div className="relative group inline-block">
      {children}
      <div className="absolute -bottom-10 -translate-x-1/2  mb-2 w-max hidden group-hover:block z-10">
        <div style={{color: color?.primary}} className="bg-white  text-sm px-3 py-1 rounded-md shadow-lg relative">
          {text}
        </div>
      </div>
    </div>
    );
};

export default Tooltip;