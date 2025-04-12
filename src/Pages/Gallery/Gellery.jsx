
import React, { useContext } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import useTheme from '../../Hooks/useTheme';
// import './gallary.css'

const gellery = () => {
    const {color} = useTheme()
  
  
  const images = [
    {
      src: "../../assets/products/img1.jfif",
      width: 320,
      height: 174,
      //  isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "../../assets/products/img1.jfif",
      width: 400,
      height: 300,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "../../assets/products/img1.jfif",
      width: 400,
      height: 100,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "../../assets/products/img1.jfif",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "../../assets/products/img1.jfif",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "../../assets/products/img1.jfif",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "../../assets/products/img1.jfif",
      width: 320,
      height: 212,
    },
    {
      src: "../../assets/products/img1.jfif",
      width: 320,
      height: 174,
      //  isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    
  ];

  const [open, setOpen] = React.useState(false)

  const ImageCard = ({ title, text, image }) => {
    return (
      <div className="relative group overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}
        <div className={`absolute inset-0 bg-white flex flex-col justify-center items-center text-center p-4 transition-all duration-300 ${image ? "bg-opacity-90 opacity-0 group-hover:opacity-100" : ""}`}>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-2">{text}</p>
          <button className="mt-4 px-4 py-2 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="">
       <div className="h-16"></div>
      {/* <div style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '100%',
        backgroundColor: '#575555',
        backgroundBlendMode: 'multiply'
      }} className='text-white flex flex-col justify-center items-center gap-2'>
        <p className='uppercase text-4xl'>Foods Photo Gallery</p>
        <p className='flex items-center gap-3 text-lg'>Home <div className='border-2 w-1 border-orange-500 h-4'></div>Gallery</p>
      </div> */}


      <div className={`flex justify-center items-center py-14 `}>

        <button type="button" style={{backgroundColor: color?.primary}} className='bg-green-500 py-2 px-5 rounded-lg text-white font-semibold text-[16px]' onClick={() => setOpen(true)}>
          Slide Show
        </button>
      </div>


      <div >

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        
        slides={[
          {
            src: `https://i.ibb.co.com/ph6bt9T/Spaghetti-Carbonara.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/ph6bt9T/Spaghetti-Carbonara.jpg", foodName: "Food 1", width: 10, height: 10 },
            ],
          },
          {
            src: `https://i.ibb.co.com/drXCpsr/Beef-Burger-with-Fries.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/drXCpsr/Beef-Burger-with-Fries.jpg", foodName: "Food 1", width: 10, height: 10 },
            ],
          },
          {
            src: `https://i.ibb.co.com/DMBYWsq/1.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/DMBYWsq/1.jpg", foodName: "Food 1", width: 10, height: 10 },
            ],
          },
          {
            src: `https://i.ibb.co.com/RcHmRmg/Grilled-Chicken-Caesar-Salad.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/RcHmRmg/Grilled-Chicken-Caesar-Salad.jpg", foodName: "Food 1", width: 10, height: 10 },

            ],
          },
          {
            src: `https://i.ibb.co.com/n1ZQZyb/2.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/n1ZQZyb/2.jpg", foodName: "Food 1", width: 10, height: 10 },

            ],
          },
          {
            src: `https://i.ibb.co.com/6NDVnK0/3.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/6NDVnK0/3.jpg", foodName: "Food 1", width: 10, height: 10 },

            ],
          },
          {
            src: `https://i.ibb.co.com/tmmdsg3/images.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/tmmdsg3/images.jpg", foodName: "Food 1", width: 10, height: 10 },

            ],
          },
          {
            src: `https://i.ibb.co.com/27Xgh97/5.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [

              { src: "https://i.ibb.co.com/27Xgh97/5.jpg", foodName: "Food 1", width: 10, height: 10 },

            ],
          },

        ]}
        
      />
      </div>

      <div className={` pb-16`}>

      <div className={`w-[85%] m-auto ` }>
      <div className="w-[90%] max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ImageCard title="Marketing" text="Sample text. Click to select the Text Element." />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard title="Flexibility" text="Sample text. Click to select the Text Element." />
    </div>


      </div>
      </div>


      

    </div>
  );
};

export default gellery;