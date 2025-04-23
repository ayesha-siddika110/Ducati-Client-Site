import React from 'react';
import Heading from '../../Heading/Heading';
import img1 from "../../../assets/products/img4.jfif"
import img2 from "../../../assets/products/img5.jfif"
import img3 from "../../../assets/products/img6.jfif"
import LatestUpdateCard from './LatestUpdateCard';
import useBlogs from '../../../Hooks/useBlogs';

const LatestUpdate = () => {
    const [Blogs] = useBlogs()
    const blog1 = Blogs?.slice(0,1)
    const blog2 = Blogs?.slice(1,3)
    console.log('blogggggggggggggg1',blog1)
    console.log('blogggggggggggggg1',blog2)
    return (
        <div className='bg-[#F7F7F7] my-10'>
            <div className='py-10 w-[90%] max-w-[1440px] m-auto'>

                <Heading heading="Know Ducati's Latest Update" paragraph="HStay informed with our latest news, trends, and innovations. Explore new collections, industry insights, and company updates—all in one place."></Heading>

                <div className="bg-white rounded-2xl">
                                <div className="md:flex gap-8 p-4">
                                    <div className="md:w-[50%] rounded-2xl">
                                        <div className="">
                                            {
                                                blog1?.map((item, index)=> <>
                                                
                                                <LatestUpdateCard key={index} item={item} date={item?.time} title={item?.title} description={item?.description} isbig={true}></LatestUpdateCard>
                                                </>)
                                            }
                                           
                                            
                                          
                                        </div>
                                    </div>
                                    <div className="md:w-[50%] flex flex-col  pt-4 md:pt-0">
                                        {
                                            blog2?.map((item,index)=><div className="md:h-[50%]  rounded-2xl">
                                            <LatestUpdateCard key={index} item={item} date={item?.time} title={item?.title} description={item?.description} isbig={false}></LatestUpdateCard>
                                            </div>)
                                        }
                                        
                                        {/* <div className="md:h-[50%]  rounded-2xl ">
                                        <LatestUpdateCard img={img3} date={" 20 Jan 2022"} title={"The Exceptional Day Care Centre at Ducati Apparels Ltd."} description={"In the dynamic world of garment manufacturing, Ducati Apparels Ltd. in Bangladesh has taken a significant..."} isbig={false}></LatestUpdateCard> */}
                                            
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
            </div>

        </div>
    );
};

export default LatestUpdate;