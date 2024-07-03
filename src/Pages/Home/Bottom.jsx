import { RiArrowRightUpLine } from 'react-icons/ri';
import bottomImg from '../../assets/Images/Rectangle 32.png'
import logo from '../../assets/Images/logo light.png'

const Bottom = () => {
    return (
        <div className='max-w-7xl mx-auto relative mt-40'>
            <img className='w-[1280px] mt-5  rounded-3xl' src={bottomImg} alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020043] to-[#020043]/20  rounded-3xl p-14 '>
                <div className='flex justify-between'>
                    <div className='pt-14'>
                        <h1 className='text-4xl font-semibold text-white'>
                            Get Your <br />
                            <br />
                            First Appointment <br /> <br />
                            at 50% Off!
                        </h1>
                        <div className='flex gap-6 mt-8'>
                            <a className="btn text-black text-xs md:text-lg bg-[#FFC637] font-medium  border-none rounded-xl">Appointment <RiArrowRightUpLine></RiArrowRightUpLine></a>
                            <a className="btn text-white text-xs md:text-lg hover:bg-[#020043] font-medium border-white bg-transparent  rounded-xl">Learn More <RiArrowRightUpLine></RiArrowRightUpLine></a>
                        </div>
                    </div>
                    <img src={logo} className='w-32 h-9' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Bottom;