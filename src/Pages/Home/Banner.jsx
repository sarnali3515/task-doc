import bannerImg from '../../assets/Images/Rectangle 5.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto relative'>
            <img className='w-[1280px] mt-5' src={bannerImg} alt="" />
            <div className='absolute rounded-[48px] top-0 left-0 w-full h-full bg-black opacity-20'></div>
        </div>
    );
};

export default Banner;