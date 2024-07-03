import { RiArrowRightUpLine } from "react-icons/ri";
import img1 from '../../assets/Images/Rectangle 27-2.png'
import img2 from '../../assets/Images/Rectangle 27-1.png'
import img3 from '../../assets/Images/Rectangle 27.png'


const Service = () => {
    return (
        <div className="mt-40 bg-white rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-7">
                <div className="text-[#020043]">
                    <a className="btn text-[#020043] text-xs md:text-lg hover:bg-[#020043] hover:text-white font-medium border-[#020043] bg-transparent  rounded-3xl mb-4">Service</a>
                    <h1 className="text-4xl font-semibold mb-4">Empowering Health,<br /> Enriching Lives</h1>
                    <p className="text-base mb-11">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <a className="btn text-black text-xs md:text-lg bg-[#FFC637] font-medium   rounded-xl">Appointment <RiArrowRightUpLine></RiArrowRightUpLine></a>
                </div>
                <div className="flex justify-center relative">
                    <img src={img1} className="rounded-3xl" alt="" />
                    <div className='absolute text-white rounded-3xl bottom-4 left-12 w-80 h-36 bg-[#020043] opacity-60 p-4'>
                        <h2 className="text-xl font-semibold mb-2">
                            Advanced Technology
                        </h2>
                        <div className="flex">
                            <p className="text-xs">
                                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </p>
                            <div className="mt-5 bg-[#FFC637] text-2xl rounded-full h-12 w-12 px-3 py-3 z-10"><RiArrowRightUpLine></RiArrowRightUpLine></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center relative">
                    <img src={img2} className="rounded-3xl" alt="" />
                    <div className='absolute text-white rounded-3xl bottom-4 left-12 w-80 h-36 bg-[#020043] opacity-60 p-4'>
                        <h2 className="text-xl font-semibold mb-2">
                            Online Doctor Meet
                        </h2>
                        <div className="flex">
                            <p className="text-xs">
                                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </p>
                            <div className="mt-5 bg-[#FFC637] text-2xl rounded-full h-12 w-12 px-3 py-3 z-10"><RiArrowRightUpLine></RiArrowRightUpLine></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center relative">
                    <img src={img3} className="rounded-3xl" alt="" />
                    <div className='absolute text-white rounded-3xl bottom-4 left-12 w-80 h-36 bg-[#020043] opacity-60 p-4'>
                        <h2 className="text-xl font-semibold mb-2">
                            Consultancy your health
                        </h2>
                        <div className="flex">
                            <p className="text-xs">
                                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                            </p>
                            <div className="mt-5 bg-[#FFC637] text-2xl rounded-full h-12 w-12 px-3 py-3 z-10"><RiArrowRightUpLine></RiArrowRightUpLine></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;