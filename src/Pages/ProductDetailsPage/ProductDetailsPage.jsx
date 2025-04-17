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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { color } = useTheme()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const images = [img1, img2, img3, img4, img1, img2];

    const data = [
        {
            "product_id": "TSHIRT001",
            "name": "Basic T-Shirt",
            "gender": "Girl",
            "sizes": "M to 3XL",
            "MOQ": "500 pieces",
            "Average_Colours": "yes",
            "images": [
                img1, img2, img3, img4, img1, img2],
            
            "materials": {
                "cotton": {
                    "gsm": {
                        "100": [
                            { "min": 1, "max": 1999, "price_per_piece": 3.00 },
                            { "min": 2000, "max": 4999, "price_per_piece": 2.80 },
                            { "min": 5000, "max": null, "price_per_piece": 2.60 }
                        ],
                        "120": [
                            { "min": 1, "max": 1999, "price_per_piece": 3.20 },
                            { "min": 2000, "max": 4999, "price_per_piece": 3.00 },
                            { "min": 5000, "max": null, "price_per_piece": 2.80 }
                        ]
                    }
                },
                "polyester": {
                    "gsm": {
                        "100": [
                            { "min": 1, "max": 1999, "price_per_piece": 3.00 },
                            { "min": 2000, "max": 4999, "price_per_piece": 2.50 },
                            { "min": 5000, "max": null, "price_per_piece": 2.30 }
                        ]
                    }
                }
            },
            "industry_specific_attributes": {
                "Material": "100% Cotton",
                "Sleeve Style": "Short Sleeve",
                "Pattern Type": "Solid",
                "Supply Ability": "10000 Pieces per Month",
                "Certification": "OEKO-TEX, BSCI, Sedex"},
            "packaging_and_delivery": {
                "Packaging Details": "1 piece in a polybag, 50 pieces in a carton",
                "Lead Time": "30 days after order confirmation",
                "Port": "Shanghai, China",
                "Payment Terms": "T/T, L/C, Western Union"
            },
            "other_attributes": {
                "Size Range": "S, M, L, XL, XXL",
                "Color Options": "Red, Blue, Green, Black, White",
                "Custom Logo": "Available",
                "Custom Design": "Available"
            },
            "other_attributes2": {
                "Size Range": "S, M, L, XL, XXL",
                "Color Options": "Red, Blue, Green, Black, White",
                "Custom Logo": "Available",
                "Custom Design": "Available"
            },
        },
    ]

    const product = data[0];
    const materials = Object.keys(product.materials);

    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [selectedGSM, setSelectedGSM] = useState("");

    // On first load, auto-select the first material and its first GSM
    useEffect(() => {
        if (materials.length > 0) {
            const firstMaterial = materials[0];
            const firstGsmList = Object.keys(product.materials[firstMaterial].gsm);
            setSelectedMaterial(firstMaterial);
            setSelectedGSM(firstGsmList[0]);
        }
    }, []);

    const gsmOptions =
        selectedMaterial && product.materials[selectedMaterial]
            ? Object.keys(product.materials[selectedMaterial].gsm)
            : [];

    const pricingData =
        selectedMaterial && selectedGSM
            ? product.materials[selectedMaterial].gsm[selectedGSM]
            : [];

    return (
        <div className=" py-10 bg-white shadow-lg rounded-lg">

            <div className="">
                {/* <h2 className="text-2xl font-bold">{product.name}</h2> */}

                {/* Material Selector */}
                {/* <div className="space-x-4">
                    <label className="font-semibold">Material:</label>
                    {materials.map((mat) => (
                        <label key={mat} className="inline-flex items-center space-x-1">
                            <input
                                type="radio"
                                name="material"
                                value={mat}
                                checked={selectedMaterial === mat}
                                onChange={() => {
                                    const firstGsm = Object.keys(product.materials[mat].gsm)[0];
                                    setSelectedMaterial(mat);
                                    setSelectedGSM(firstGsm);
                                }}
                            />
                            <span>{mat}</span>
                        </label>
                    ))}
                </div> */}

                {/* GSM Dropdown */}
                {/* {selectedMaterial && (
                    <div className="space-x-2">
                        <label className="font-semibold">GSM:</label>
                        <select
                            className="border p-1 rounded"
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
                )} */}

                {/* Pricing */}
                {/* {pricingData?.length > 0 && (
                    <div className="bg-gray-100 p-4 rounded">
                        <h3 className="text-lg font-bold mb-2">
                            Bulk Pricing for {selectedMaterial} GSM {selectedGSM}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {pricingData.map((tier, index) => (
                                <div key={index} className="text-center border p-2 rounded bg-white shadow-sm">
                                    <p className="text-sm text-gray-500">
                                        {tier.min} - {tier.max ?? "∞"} Pieces
                                    </p>
                                    <p className="text-lg font-bold">${tier.price_per_piece.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )} */}
            </div>
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
                            {data[0]?.images?.map((item, index) => (
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
                            {data[0]?.images?.map((item, index) => (
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
                        <h2 className="text-3xl font-bold">{data[0]?.name}</h2>
                        <div style={{ backgroundColor: color?.secondary }} className="mt-4  p-6 space-y-2 rounded-2xl ">
                            <div className="space-x-4 text-base ">
                                <span>Gender:</span> <span className="bg-white p-1 rounded-lg">{data[0]?.gender}</span>
                            </div>
                            {/* metarial */}
                            <div className="flex gap-4 ">
                                <span>Metarial:</span>

                                {materials.map((mat) => (
                                    <label key={mat} className="inline-flex items-center space-x-1">
                                        <input
                                            type="radio"
                                            name="material"
                                            className="bg-white p-1 rounded-lg"
                                            value={mat}
                                            checked={selectedMaterial === mat}
                                            onChange={() => {
                                                const firstGsm = Object.keys(product.materials[mat].gsm)[0];
                                                setSelectedMaterial(mat);
                                                setSelectedGSM(firstGsm);
                                            }}
                                        />
                                        <span className="bg-white p-1 rounded-lg">{mat}</span>
                                    </label>
                                ))}
                            </div>
                            {/* MOQ and size */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-4">

                                    <span>MOQ:</span> <span className="bg-white p-1 rounded-lg">{data[0]?.MOQ}</span>
                                </div>
                                <div className="flex items-center gap-4">

                                    <span>Sizes:</span> <span className="bg-white p-1 rounded-lg">{data[0]?.sizes}</span>
                                </div>
                            </div>
                            {/* GSM and COLORS */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-4">

                                    <span>GSM:</span> <span className="bg-white p-1 rounded-lg">
                                        {selectedMaterial && (
                                            <div className="space-x-2">
                                            
                                                <select
                                                    className=" p-1 rounded"
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
                                    <p className="bg-white p-1 rounded-lg">{data[0]?.Average_Colours}</p>
                                </div>
                            </div>
                            {/* Fabric Constructions: */}
                            {/* <div className="flex gap-4">
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

                            </div> */}
                        </div>

                        {/* Pricing Section */}
                        <div className="mt-6 bg-gray-100 p-4 rounded-2xl">
                            <h3 className="text-2xl font-bold">Competitive Bulk Pricing for Your Orders</h3>
                            <div className="py-8 grid md:grid-cols-4 grid-cols-2 gap-4">

                                {/* <p className="flex flex-col text-gray-400">500-1k Pieces <span className="font-bold text-2xl text-black">USD 3.30</span></p> */}
                                {pricingData.map((tier, index) => (
                                <div key={index} >
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
                               
                                {
                                    Object.entries(product.industry_specific_attributes).map(([key, value]) => (
                                        <tr key={key} className="">
                                            <td className="p-3  font-medium">{key}</td>
                                            <td className="p-3">{value}</td>
                                        </tr>
                                    ))
                                }
                                
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
                               
                               {
                                   Object.entries(product.packaging_and_delivery).map(([key, value]) => (
                                       <tr key={key} className="">
                                           <td className="p-3  font-medium">{key}</td>
                                           <td className="p-3">{value}</td>
                                       </tr>
                                   ))
                               }
                               
                           </tbody>
                        </table>

                    </div>
                    {/* other atrubite */}



                </div>

                <div style={{ backgroundColor: color?.secondary }} className="p-4 rounded-2xl ">
                    {/* Header */}
                    <div className="bg-green-600 text-white font-semibold p-2 rounded-t-lg">
                        Other atributes
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">

                        <table className="w-full border-collapse border-none table table-zebra text-gray-700">
                        <tbody>
                               
                               {
                                   Object.entries(product.other_attributes).map(([key, value]) => (
                                       <tr key={key} className="">
                                           <td className="p-3  font-medium">{key}</td>
                                           <td className="p-3">{value}</td>
                                       </tr>
                                   ))
                               }
                               
                           </tbody>
                        </table>
                        <table className="w-full border-collapse border-none table table-zebra text-gray-700">
                        <tbody>
                               
                               {
                                   Object.entries(product.other_attributes2).map(([key, value]) => (
                                       <tr key={key} className="">
                                           <td className="p-3  font-medium">{key}</td>
                                           <td className="p-3">{value}</td>
                                       </tr>
                                   ))
                               }
                               
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
