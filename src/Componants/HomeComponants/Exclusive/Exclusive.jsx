import img1 from "../../../assets/products/img1.jfif"
import img2 from "../../../assets/products/img2.jfif"
import img3 from "../../../assets/products/img3.jfif"
import Heading from "../../Heading/Heading";



const Card = ({ image, title, description }) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="relative rounded-2xl overflow-hidden bg-cover bg-center shadow-lg h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent flex flex-col justify-end p-6 text-white">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default function Exclusive() {
    return (
        <div>
            <Heading heading="Experience Exclusive Quality" paragraph="Ducati apparels Ltd. 100% export-oriented readymade garments industry concern of the “Hyacinth group” that was established in 2004 is a private limited company under the registration of “the registrar of joint stock of companies & firms (RJSC)."></Heading>
            <div className="w-[90%] max-w-[1440px] m-auto">
                <div className="md:flex gap-4 p-6">
                    <div className="md:w-[50%] rounded-2xl">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <img src={img1} alt={"Discover"} className="w-full md:h-[570px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent flex flex-col justify-end p-6 text-white">
                                <h2 className="text-xl font-bold">Discover</h2>
                                <p className="text-sm">Productivity, Efficiency, and Sustainability</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[50%] flex flex-col gap-4">
                        <div className="md:h-[50%] h-[250px] rounded-2xl ">
                            <Card
                                image={img2}
                                title="What We Offer"
                                description="Customizations & Delicate Crafting Spirit"
                            />
                        </div>
                        <div className="md:h-[50%] h-[250px] rounded-2xl">
                            <Card
                                image={img3}
                                title="Why Choose Us"
                                description="Save your time & cost, Alleviate your worries"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
