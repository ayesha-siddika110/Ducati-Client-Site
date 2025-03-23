import React from 'react';
import useTheme from '../../Hooks/useTheme';

const PrimaryButton = ({text}) => {
    const {color} = useTheme()
    return (
        <div style={{backgroundColor: color?.primary}} className={`text-base text-white px-4 py-2 rounded-md`}>
            {text}
        </div>
    );
};

export default PrimaryButton;