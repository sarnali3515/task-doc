import { RiArrowRightUpLine } from 'react-icons/ri';
import bottomImg from '../../assets/Images/Rectangle 32.png'
import logo from '../../assets/Images/logo light.png'

const Bottom = () => {
    return (
        <div className='max-w-7xl mx-auto relative mt-10 md:mt-40 bg-gradient-to-bottom'>
            <img className='w-[1280px] mt-5  rounded-3xl' src={bottomImg} alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020043] to-[#020043]/20  rounded-3xl p-3 md:p-14 '>
                <div className='flex justify-between'>
                    <div className='md:pt-14'>
                        <h1 className='md:text-4xl font-semibold text-white'>
                            Get Your <br />

                            First Appointment <br />
                            at 50% Off!
                        </h1>
                        <div className='flex gap-6 mt-2 md:mt-8'>
                            <a className="btn  text-black text-xs md:text-lg bg-[#FFC637] md:font-medium  border-none rounded-xl">Appointment <RiArrowRightUpLine></RiArrowRightUpLine></a>
                            <a className="btn text-white text-xs md:text-lg hover:bg-[#020043] md:font-medium border-white bg-transparent  rounded-xl">Learn More <RiArrowRightUpLine></RiArrowRightUpLine></a>
                        </div>
                    </div>
                    <img src={logo} className='w-10 h-4 md:w-32 md:h-9' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Bottom;