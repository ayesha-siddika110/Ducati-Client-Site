import React from 'react';
import Heading from '../../Heading/Heading';
import video from "../../../assets/videos/7e77d15bf5d263db0c4be3677a69f8116144ea39.mp4";

const DupatiApparels = () => {
    return (
        <div className='py-10'>
            <div className='w-[90%] max-w-[1440px] m-auto'>

                <Heading heading="Ducati Apparels Ltd
" paragraph="Founded in 2004, Ducati Apparels Ltd. is at the forefront of Bangladesh’s textile industry, renowned for our commitment to quality, innovation, and integrity. We
blend traditional craftsmanship with modern technology to create exceptional garments for the global market. Our ethos revolves around ethical practices,
environmental stewardship, and a dedication to excellence. With a significant global presence and a deep respect for our local heritage, we strive to be
trendsetters in fashion-woven and knitwear, crafting experiences that resonate sustainability and cultural richness. Ducati Apparels Ltd. is where tradition
meets innovation, shaping the future of fashion with every stitch and fabric. " widthfull={true}></Heading>


<video  height="200" width={"100%"} controls autoplay muted  className='rounded-3xl max-h-[1000px]'>
  <source src={video} type="video/mp4"/>
  Your browser does not support the video tag.
</video>

            </div>
        </div>
    );
};

export default DupatiApparels;