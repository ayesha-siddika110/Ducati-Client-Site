import React from 'react';
import Heading from '../../Heading/Heading';
import useTheme from '../../../Hooks/useTheme';
import { IoChatbubblesOutline } from 'react-icons/io5';
import MadeEasyCard from '../MadeEasyCard/MadeEasyCard';
import { BsLightningCharge } from 'react-icons/bs';
import { FaArrowUpRightDots } from 'react-icons/fa6';

const FashionMadeEasy = () => {
    const { color } = useTheme()
    return (
        <div style={{ backgroundColor: color?.primary }} className='py-20'>
            <div>

            <Heading heading="Creating Fashion Made Easy
" paragraph="A seamless, step-by-step approach to designing, producing, and delivering high-quality
fashion effortlessly." colorwhite={true}></Heading>
            <div className='w-[90%] m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
                <MadeEasyCard icon={<IoChatbubblesOutline/>} firstline="Create your project" secondeLine="Share your vision with us! Whether you have a rough idea or a detailed plan, we guide you through the design and material selection process to bring your concept to life."></MadeEasyCard>
                <MadeEasyCard icon={<BsLightningCharge />} firstline="Chat and compare" secondeLine="Discuss your project with our experts, explore options, and compare fabrics, styles, and finishes. We ensure you get the best quality and pricing before moving forward."></MadeEasyCard>
                <MadeEasyCard icon={<FaArrowUpRightDots />} firstline="Start production" secondeLine="Once everything is finalized, we begin production with precision and efficiency. Our skilled team ensures top-notch craftsmanship, delivering high-quality apparel on time."></MadeEasyCard>
            </div>
            </div>


        </div>
    );
};

export default FashionMadeEasy;