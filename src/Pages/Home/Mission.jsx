import { RiArrowRightUpLine } from "react-icons/ri";
import img from '../../assets/Images/Rectangle 24.png';

const Mission = () => {
    return (
        <div className="mt-40 relative">
            <div className="grid grid-cols-2 gap-10">
                <div className="text-[#020043]">
                    <a className="btn text-[#020043] text-xs md:text-lg hover:bg-[#020043] hover:text-white font-medium border-[#020043] bg-transparent  rounded-3xl mb-4">Who we are</a>
                    <h1 className="text-4xl font-semibold mb-4">We Help To Get <br /> Soultions</h1>
                    <p className="text-base mb-11">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <a className="btn text-black text-xs md:text-lg bg-[#FFC637] font-medium   rounded-xl">Learn More <RiArrowRightUpLine></RiArrowRightUpLine></a>
                </div>
                <div className="relative">
                    <div className="flex justify-end">
                        <img src={img} className="" alt="" />
                    </div>
                    <div className="absolute right-72 -bottom-10 w-96 bg-[#343268] text-white rounded-3xl py-10 px-7">
                        <h2 className="text-2xl font-medium">Our mission is simple</h2>
                        <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Mission;