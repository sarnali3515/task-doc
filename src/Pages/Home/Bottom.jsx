import bottomImg from '../../assets/Images/Rectangle 32.png'
const Bottom = () => {
    return (
        <div className='max-w-7xl mx-auto relative mt-40'>
            <img className='w-[1280px] mt-5  rounded-3xl' src={bottomImg} alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020043] to-[#020043]/20  rounded-3xl p-14'>
                <h1 className='text-4xl font-semibold text-white'>
                    Get Your <br />
                    <br />
                    First Appointment <br /> <br />
                    at 50% Off!
                </h1>
            </div>

        </div>
    );
};

export default Bottom;