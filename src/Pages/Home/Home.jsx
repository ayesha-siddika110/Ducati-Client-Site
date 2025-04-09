import React from 'react';
import HeroSlider from '../../Componants/HomeComponants/HeroSlider/HeroSlider';
import TrustedPartner from '../../Componants/HomeComponants/TrustedPartner/TrustedPartner';
import DupatiApparels from '../../Componants/HomeComponants/DupatiApparels/DupatiApparels';
import FashionMadeEasy from '../../Componants/HomeComponants/FashionMadeEasy/FashionMadeEasy';
import TrendProducts from '../../Componants/HomeComponants/TrendProducts/TrendProducts';
import Certification from '../../Componants/HomeComponants/Certification/Certification';
import Exclusive from '../../Componants/HomeComponants/Exclusive/Exclusive';
import LatestUpdate from '../../Componants/HomeComponants/LatestUpdate/LatestUpdate';

const Home = () => {
    return (
        <div className=''>
            {/* Hero Slider */}
            <HeroSlider></HeroSlider>

            {/* Trusted Partner */}
            <TrustedPartner></TrustedPartner>
            {/* Dupati Apparels ltd */}
            <DupatiApparels></DupatiApparels>
            {/* Trend Peoducts */}
            <TrendProducts ></TrendProducts>
            {/* Fashion Made Easy*/}
            <FashionMadeEasy></FashionMadeEasy>
            {/* certifications */}
            <Certification></Certification>
            {/* Exclusive */}
            <Exclusive></Exclusive>
            {/* latest Update */}
            <LatestUpdate></LatestUpdate>


        </div>
    );
};

export default Home;