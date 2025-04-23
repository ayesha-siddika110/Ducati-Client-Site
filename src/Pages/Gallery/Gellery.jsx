
import React, { useContext, useState } from 'react';
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
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import useProducts from '../../Hooks/useProducts';
// import ImageLayout from 'react-image-layout';
const gellery = () => {
  const { color } = useTheme()
  const [products] = useProducts()


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

  const ImageCard = ({ title, text, image,name }) => {
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
          <p className="mt-4 px-4 py-2   transition  text-lg font-semibold uppercase">
            {name}
            <PhotoAlbum
          layout="masonry"
          photos={images}
          columns={(containerWidth) => {
            if (containerWidth < 500) return 1;
            if (containerWidth < 900) return 2;
            return 3;
          }}
          spacing={10}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
        /> 
          </p>
          {/* <button className="mt-4 px-4 py-2 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition">
            Read More
          </button> */}
        </div>
      </div>
    );
  };

  const photos = [
    {
      src: "https://res.cloudinary.com/dvribl8s2/image/upload/v1744631073/acxwti26hxpw3t6nqdgu.png",
      width: 800,
      height: 600,
      title: "Beautiful Forest",
    },
    {
      src: "https://res.cloudinary.com/dvribl8s2/image/upload/v1744629875/wsqjc2j5ms2cskyuv4m2.jpg",
      width: 800,
      height: 800,
      title: "Mountain View",
    },
    {
      src: "https://res.cloudinary.com/dvribl8s2/image/upload/v1744628919/cld-sample-5.jpg",
      width: 600,
      height: 800,
      title: "Lake Reflection",
    },
    {
      src: "https://res.cloudinary.com/dvribl8s2/image/upload/v1744628919/samples/woman-on-a-football-field.jpg",
      width: 700,
      height: 500,
      title: "Sunset Glow",
    },
    {
      src: "https://res.cloudinary.com/dvribl8s2/image/upload/v1744628918/samples/chair.png",
      width: 1000,
      height: 700,
      title: "Hiking Trail",
    },
  ];
  const [index, setIndex] = useState(-1);


  return (
    <div className="">

      <div className="max-w-6xl mx-auto p-4">

        {/* <div className=''>  */}
{/* 
      */}

    

      </div>


      {/* <div className={`flex justify-center items-center py-14 `}>

        <button type="button" style={{backgroundColor: color?.primary}} className='bg-green-500 py-2 px-5 rounded-lg text-white font-semibold text-[16px]' onClick={() => setOpen(true)}>
          Slide Show
        </button>
      </div> */}


      <div >

        {/* <Lightbox
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
        
      /> */}
      </div>

      <div className={` pb-16`}>

      <div className={`w-[85%] m-auto ` }>
      <div className="w-[90%] max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* <ImageCard title="Marketing" text="Sample text. Click to select the Text Element." />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard image="https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg" />
      <ImageCard title="Flexibility" text="Sample text. Click to select the Text Element." /> */}
      {
        products?.map((item,index)=> <ImageCard image={item?.images} name={item?.name} />)
      }
    </div>


      </div>
      </div>

{/* <ImageLayout items={photos.src} columnWidth={200} columns={5} gutter={8} /> */}




    </div>
  );
};

export default gellery;