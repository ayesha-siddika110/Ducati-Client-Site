import React from 'react';
import Heading from '../../Heading/Heading';
import img1 from "../../../assets/products/img4.jfif"
import img2 from "../../../assets/products/img5.jfif"
import img3 from "../../../assets/products/img6.jfif"
import LatestUpdateCard from './LatestUpdateCard';

const LatestUpdate = () => {
    return (
        <div className='bg-[#F7F7F7] my-10'>
            <div className='py-10 w-[90%] max-w-[1440px] m-auto'>

                <Heading heading="Know Ducati's Latest Update" paragraph="HStay informed with our latest news, trends, and innovations. Explore new collections, industry insights, and company updates—all in one place."></Heading>

                <div className="bg-white rounded-2xl">
                                <div className="md:flex gap-8 p-4">
                                    <div className="md:w-[50%] rounded-2xl">
                                        <div className="">
                                            <LatestUpdateCard img={img1} date={" 20 Jan 2022"} title={"The Exceptional Day Care Centre at Ducati Apparels Ltd."} description={"In the dynamic world of garment manufacturing, Ducati Apparels Ltd. in Bangladesh has taken a significant..."} isbig={true}></LatestUpdateCard>
                                           
                                            
                                          
                                        </div>
                                    </div>
                                    <div className="md:w-[50%] flex flex-col  pt-4 md:pt-0">
                                        <div className="md:h-[50%]  rounded-2xl">
                                        <LatestUpdateCard img={img2} date={" 20 Jan 2022"} title={"The Exceptional Day Care Centre at Ducati Apparels Ltd."} description={"In the dynamic world of garment manufacturing, Ducati Apparels Ltd. in Bangladesh has taken a significant..."} isbig={false}></LatestUpdateCard>
                                        </div>
                                        <div className="md:h-[50%]  rounded-2xl ">
                                        <LatestUpdateCard img={img3} date={" 20 Jan 2022"} title={"The Exceptional Day Care Centre at Ducati Apparels Ltd."} description={"In the dynamic world of garment manufacturing, Ducati Apparels Ltd. in Bangladesh has taken a significant..."} isbig={false}></LatestUpdateCard>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>

        </div>
    );
};

export default LatestUpdate;