import React from 'react';
import Marquee from 'react-fast-marquee';
import Heading from '../../Heading/Heading';
import usePartners from '../../../Hooks/usePartners';

const Certification = () => {

  const [partners] = usePartners()
    // const partners = [
    //     { _id: "1", partnerName: "Partner 1", image: "https://i.ibb.co.com/VYMSVLdX/598daee8604a65a8fc76511b6e0ce4e5.png" },
    //     { _id: "2", partnerName: "Partner 2", image: "https://i.ibb.co.com/fdzcTbmc/2de91d6baf74e9c9df32ce70b0eb6241.png" },
    //     { _id: "3", partnerName: "Partner 3", image: "https://i.ibb.co.com/KxF5f49W/0514611e59033d69a61805fc11d2c807.png" },
    //     { _id: "4", partnerName: "Partner 4", image: "https://i.ibb.co.com/PG1JytCt/c12637714979c070c373ccbd74baceb8.png" },
    //     { _id: "5", partnerName: "Partner 5", image: "https://i.ibb.co.com/fdzcTbmc/2de91d6baf74e9c9df32ce70b0eb6241.png" },
    //     { _id: "6", partnerName: "Partner 6", image: "https://i.ibb.co.com/W4gGSnBn/e8f0f544d320eaf1d42e09873b1816eb.png" },
    //     { _id: "7", partnerName: "Partner 7", image: "https://i.ibb.co.com/bgS2S0vn/0374a8658826ff8b24649749c2b92a7f.png" },
    //     { _id: "8", partnerName: "Partner 8", image: "https://i.ibb.co.com/bgJ0YMfg/2604d8f9a52ecb5466ce54f3d5bf289b.png" },
    //     { _id: "9", partnerName: "Partner 9", image: "https://i.ibb.co.com/Q7WrjhWr/5f0a0f8da457f539fbb2f07d7ae9e1c1.png" },
    //     { _id: "10", partnerName: "Partner 10", image: "https://i.ibb.co.com/nMzY7x9N/513bfd2bd765608c5cb2aa294232e8ab.png" },
    //     { _id: "11", partnerName: "Partner 11", image: "https://i.ibb.co.com/nMzY7x9N/513bfd2bd765608c5cb2aa294232e8ab.png" },
    //     { _id: "12", partnerName: "Partner 12", image: "https://i.ibb.co.com/VYMSVLdX/598daee8604a65a8fc76511b6e0ce4e5.png" },
    //     { _id: "13", partnerName: "Partner 13", image: "https://i.ibb.co.com/Mxm32V8b/eac310422f1fcebaac99c7477eb0814a.png" },
    //     { _id: "14", partnerName: "Partner 14", image: "https://i.ibb.co.com/rfwFV39F/549331fd398e203e9b2e495ed7a233de.png" }
    //   ];


      
    return (
        <div className='py-10'>
        <Heading heading="Certification
" paragraph="We uphold the highest industry standards with globally recognized certifications, ensuring quality, sustainability, and ethical manufacturing in every product."></Heading>

<div className='bg-[#F7F7F7] py-6'>

<Marquee speed={30} pauseOnHover={true}>

    {partners?.map((partner) => (
      <img
        key={partner._id}
        src={partner.images}
        alt="Partner Logo"
        className="h-32 mx-4 bg-white p-1 rounded-lg shadow-md"
      />
    ))}
  </Marquee>
</div>

    </div>
    );
};

export default Certification;