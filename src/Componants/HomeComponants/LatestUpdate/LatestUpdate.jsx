import React from 'react';
import Heading from '../../Heading/Heading';

const LatestUpdate = () => {
    return (
        <div className='bg-[#F7F7F7] my-10'>
            <div className='py-10 w-[90%] m-auto'>

                <Heading heading="Know Ducati's Latest Update" paragraph="HStay informed with our latest news, trends, and innovations. Explore new collections, industry insights, and company updates—all in one place."></Heading>

                <div className="w-[90%] m-auto">
                                <div className="md:flex gap-4 p-6">
                                    <div className="md:w-[50%] rounded-2xl">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                          
                                        </div>
                                    </div>
                                    <div className="md:w-[50%] flex flex-col gap-4">
                                        <div className="md:h-[50%] h-[250px] rounded-2xl ">
                                          
                                        </div>
                                        <div className="md:h-[50%] h-[250px] rounded-2xl">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>

        </div>
    );
};

export default LatestUpdate;