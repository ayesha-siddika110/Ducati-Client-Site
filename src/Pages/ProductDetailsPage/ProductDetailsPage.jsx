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
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [product, setProduct] = useState({});
    const { color } = useTheme();
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [selectedGSM, setSelectedGSM] = useState("");
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch product data using dynamic id
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error('Failed to fetch product', err);
            });
    }, [id]);

    const materials = Object.keys(product?.materials || {});

    // Auto-select first material and GSM when the product data is loaded
    useEffect(() => {
        if (product && product.materials) {
          const materials = Object.keys(product.materials);
          if (materials.length > 0) {
            const firstMaterial = materials[0];
            const gsmKeys = Object.keys(product.materials[firstMaterial]?.gsm || {});
            const firstGSM = gsmKeys[0] || "";
            setSelectedMaterial(firstMaterial);
            setSelectedGSM(firstGSM);
          }
        }
      }, [product]);
    
      if (!product) {
        return <div>Loading...</div>;
      }
    
    //   const materials = Object.keys(product.materials || {});
      const gsmOptions = selectedMaterial
        ? Object.keys(product.materials[selectedMaterial]?.gsm || {})
        : [];
      const pricingData =
        selectedMaterial && selectedGSM
          ? product.materials[selectedMaterial]?.gsm[selectedGSM] || []
          : [];

    return (
        <div className="py-10 bg-white shadow-lg rounded-lg">
            <div className="max-w-[1440px] w-[90%] m-auto">
                {/* slider and details */}
                <div className="grid md:grid-cols-2 gap-6">
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
                            {product?.images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img style={{ border: `1px solid ${color?.third}` }} src={item} alt="product Image" className="w-full  h-[500px] object-cover rounded-lg" />
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
                            {product?.images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item} style={{ border: `1px solid ${color?.third}` }}
                                        alt="product Image"
                                        className="border w-auto h-20 p-1 object-cover mt-2 rounded-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Product Details Section */}
                    <div className="w-[90vw] md:w-[100%]">
                        <h2 className="text-3xl font-bold">{product?.name}</h2>
                        <div style={{ backgroundColor: color?.secondary }} className="mt-4 p-6 space-y-2 rounded-2xl">
                            <div className="space-x-4 text-base">
                                <span>Gender:</span> <span className="bg-white p-1 rounded-lg">{product?.gender}</span>
                            </div>

                            <div className="flex gap-4">
                                <span>Material:</span>
                                {materials.map((mat) => (
                                    <label key={mat} className="inline-flex items-center space-x-1 mr-4">
                                        <input
                                            type="radio"
                                            name="material"
                                            className="bg-white p-1 rounded-lg"
                                            value={mat}
                                            checked={selectedMaterial === mat}
                                            onChange={() => {
                                                const gsmKeys = Object.keys(product.materials[mat]?.gsm || {});
                                                const firstGsm = gsmKeys[0] || "";
                                                setSelectedMaterial(mat);
                                                setSelectedGSM(firstGsm);
                                            }}
                                        />
                                        <span className="bg-white p-1 rounded-lg">{mat}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <div className="flex items-center gap-4">
                                    <span>MOQ:</span> <span className="bg-white p-1 rounded-lg">{product?.MOQ}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>Sizes:</span> <span className="bg-white p-1 rounded-lg">{product?.sizes}</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex items-center gap-4">
                                    <span>GSM:</span> <span className="bg-white p-1 rounded-lg">
                                        {selectedMaterial && (
                                            <div className="space-x-2">
                                                <select
                                                    className="p-1 rounded"
                                                    value={selectedGSM}
                                                    onChange={(e) => setSelectedGSM(e.target.value)}
                                                >
                                                    {gsmOptions.map((gsm) => (
                                                        <option key={gsm} value={gsm}>
                                                            {gsm}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>Average Colour:</span>
                                    <p className="bg-white p-1 rounded-lg">{product?.Average_Colours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Section */}
                        <div className="mt-6 bg-gray-100 p-4 rounded-2xl">
                            <h3 className="text-2xl font-bold">Competitive Bulk Pricing for Your Orders</h3>
                            <div className="py-8 grid md:grid-cols-4 grid-cols-2 gap-4">
                                {pricingData.map((tier, index) => (
                                    <div key={index}>
                                        <p className="text-sm text-gray-500">
                                            {tier.min} - {tier.max ?? "∞"} Pieces
                                        </p>
                                        <p className="font-bold text-2xl text-black">USD {tier.price_per_piece.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white p-3 rounded-2xl flex flex-wrap items-center gap-8">
                                <p className="text-xl">Contact for order</p>
                                <FaSquareWhatsapp className="text-4xl text-[#25D366]" />
                                <img src={emaillogo} alt="Gmail" className="w-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
