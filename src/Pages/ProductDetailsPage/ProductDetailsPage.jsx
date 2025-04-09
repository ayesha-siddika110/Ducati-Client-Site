import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import 'swiper/css/free-mode';
import './productdetails.css'

import { FreeMode, Thumbs } from 'swiper/modules';
import img1 from "../../assets/products/img1.jfif"
import img2 from "../../assets/products/img2.jfif"
import img3 from "../../assets/products/img3.jfif"
import img4 from "../../assets/products/img4.jfif"
import productimg from "../../assets/products/6bb4fb4dd5ba00bbca4e7e8195b5c329.png"
import productimg2 from "../../assets/products/008ea2391635532bb7bdc0e6b7f7d950.png"
import emaillogo from "../../assets/logos/gmail.png"
import useTheme from "../../Hooks/useTheme";
import { FaSquareWhatsapp } from "react-icons/fa6";
import ProductCard from "../../Componants/HomeComponants/ProductCard/ProductCard";


const ProductDetailsPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const { color } = useTheme()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const images = [img1, img2, img3, img4, img1, img2];
    return (
        <div className=" py-10 bg-white shadow-lg rounded-lg">
            <div className="max-w-[1440px] w-[90%] m-auto">
                {/* slider and details */}
                <div className="grid md:grid-cols-2 gap-6 ">
                    {/* Image Section */}
                    <div className="w-[90vw] md:w-[100%]">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img style={{ border: `1px solid ${color?.third}` }} src={item} alt="product Image" className="w-full h-[350px]  object-cover rounded-lg" />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item} style={{ border: `1px solid ${color?.third}` }}
                                        alt="product Image"
                                        className="border w-auto h-20 p-1 object-cover mt-2 rounded-lg"  // Set width and height here
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Product Details Section */}
                    <div className="w-[90vw] md:w-[100%]">
                        <h2 className="text-3xl font-bold">Hot Selling Women's Singlet With Photo Board</h2>
                        <div style={{ backgroundColor: color?.secondary }} className="mt-4  p-6 space-y-2 rounded-2xl ">
                            <div className="space-x-4 text-base ">
                                <span>Gender:</span> <span className="bg-white p-1 rounded-lg">Girl</span>
                            </div>
                            {/* metarial */}
                            <div className="flex gap-4 ">
                                <span>Metarial:</span>

                                <div className="flex flex-wrap gap-3">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html" className="bg-white p-1 rounded-lg">HTML</label><br />
                                    <input type="radio" id="css" name="fav_language" value="CSS" />
                                    <label for="css" className="bg-white p-1 rounded-lg">CSS</label><br />
                                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                    <label for="javascript" className="bg-white p-1 rounded-lg">JavaScript</label>
                                </div>
                            </div>
                            {/* MOQ and size */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-4">

                                    <span>MOQ:</span> <span className="bg-white p-1 rounded-lg">500 Pieces</span>
                                </div>
                                <div className="flex items-center gap-4">

                                    <span>Sizes:</span> <span className="bg-white p-1 rounded-lg">M to 3Xl</span>
                                </div>
                            </div>
                            {/* GSM and COLORS */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-4">

                                    <span>GSM:</span> <span className="bg-white p-1 rounded-lg">
                                        <select id="cars" name="cars">
                                            <option value="volvo">240</option>
                                            <option value="saab">300</option>
                                            <option value="fiat">200</option>
                                            <option value="audi">450</option>
                                        </select>
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">

                                    <span>Colors & Dyeing types:</span>
                                    <select id="cars" name="cars">
                                        <option value="volvo">Solid</option>
                                        <option value="saab">Trasnsparent</option>
                                    </select>
                                </div>
                            </div>
                            {/* Fabric Constructions: */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-4">

                                    <span>Fabric Constructions:</span> <span className="bg-white p-1 rounded-lg">
                                        <select id="cars" name="cars">
                                            <option value="volvo">133x72 / 45x45</option>
                                            <option value="saab">133x72 / 45x45</option>
                                            <option value="fiat">133x72 / 45x45</option>
                                            <option value="audi">133x72 / 45x45</option>
                                        </select>
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Pricing Section */}
                        <div className="mt-6 bg-gray-100 p-4 rounded-2xl">
                            <h3 className="text-2xl font-bold">Competitive Bulk Pricing for Your Orders</h3>
                            <div className="py-8 grid md:grid-cols-4 grid-cols-2 gap-4">

                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                                <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p>
                            </div>

                            <div className="bg-white p-3 rounded-2xl flex flex-wrap items-center gap-8">
                                <p className="text-xl">Contact for order</p>
                                <FaSquareWhatsapp className="text-4xl text-[#25D366]" />
                                <img src={emaillogo} alt="Gmail" className="w-10" />
                            </div>


                        </div>


                    </div>
                </div>

                <p className="font-semibold text-4xl">Key attributes</p>

                {/* table */}
                <div className="bg-white  rounded-lg  grid md:grid-cols-2 grid-cols-1 gap-8 py-8">
                    <div style={{ backgroundColor: color?.secondary }} className="p-4 rounded-2xl">
                        {/* Header */}
                        <div className="bg-green-600 text-white font-semibold p-2 rounded-t-lg">
                            Industry-specific attributes
                        </div>

                        {/* Table */}
                        <table className="w-full border-collapse border-none table table-zebra text-gray-700">
                            <tbody>
                                <tr className="">
                                    <td className="p-3  font-medium">Material</td>
                                    <td className="p-3">Terry Fleece, Inside Brush</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Sleeve Style</td>
                                    <td className="p-3">Long Sleeve T-Shirt With Cuff Rib</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Pattern Type</td>
                                    <td className="p-3">Side Seam Body</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Supply Ability</td>
                                    <td className="p-3">100 Thousand Pcs to Each Month</td>
                                </tr>
                                <tr>
                                    <td className="p-3  font-medium">Certification</td>
                                    <td className="p-3">BSCI, Sedex, Oekotex, Gots & Accord.</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div style={{ backgroundColor: color?.secondary }} className="p-4 rounded-2xl">
                        {/* Header */}
                        <div className="bg-green-600 text-white font-semibold p-2 rounded-t-lg">
                            Packaging And Delivery
                        </div>

                        <table className="w-full border-collapse border-none table table-zebra text-gray-700">
                            <tbody>
                                <tr className="">
                                    <td className="p-3  font-medium">Material</td>
                                    <td className="p-3">Terry Fleece, Inside Brush</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Sleeve Style</td>
                                    <td className="p-3">Long Sleeve T-Shirt With Cuff Rib</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Pattern Type</td>
                                    <td className="p-3">Side Seam Body</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Supply Ability</td>
                                    <td className="p-3">100 Thousand Pcs to Each Month</td>
                                </tr>
                                <tr>
                                    <td className="p-3  font-medium">Certification</td>
                                    <td className="p-3">BSCI, Sedex, Oekotex, Gots & Accord.</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    {/* other atrubite */}



                </div>

                <div style={{ backgroundColor: color?.secondary }} className="p-4 rounded-2xl ">
                    {/* Header */}
                    <div className="bg-green-600 text-white font-semibold p-2 rounded-t-lg">
                        Packaging And Delivery
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">

                        <table className="w-full border-collapse border-none table table-zebra text-gray-700">
                            <tbody>
                                <tr className="">
                                    <td className="p-3  font-medium">Material</td>
                                    <td className="p-3">Terry Fleece, Inside Brush</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Sleeve Style</td>
                                    <td className="p-3">Long Sleeve T-Shirt With Cuff Rib</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Pattern Type</td>
                                    <td className="p-3">Side Seam Body</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Supply Ability</td>
                                    <td className="p-3">100 Thousand Pcs to Each Month</td>
                                </tr>
                                <tr>
                                    <td className="p-3  font-medium">Certification</td>
                                    <td className="p-3">BSCI, Sedex, Oekotex, Gots & Accord.</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full border-collapse border-none table table-zebra text-gray-700">
                            <tbody>
                                <tr className="">
                                    <td className="p-3  font-medium">Material</td>
                                    <td className="p-3">Terry Fleece, Inside Brush</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Sleeve Style</td>
                                    <td className="p-3">Long Sleeve T-Shirt With Cuff Rib</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Pattern Type</td>
                                    <td className="p-3">Side Seam Body</td>
                                </tr>
                                <tr className="">
                                    <td className="p-3  font-medium">Supply Ability</td>
                                    <td className="p-3">100 Thousand Pcs to Each Month</td>
                                </tr>
                                <tr>
                                    <td className="p-3  font-medium">Certification</td>
                                    <td className="p-3">BSCI, Sedex, Oekotex, Gots & Accord.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>

                {/* More Related product here */}

                <p className="font-semibold text-4xl pt-14 pb-5">More Related product here</p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                            <ProductCard img={productimg}></ProductCard>
                            <ProductCard img={productimg}></ProductCard>
                            <ProductCard img={productimg2}></ProductCard>
                            <ProductCard img={productimg2}></ProductCard>

                </div>



            </div>
        </div>
    );
};

export default ProductDetailsPage;
