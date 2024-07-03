import user1 from '../../assets/Icons/user-1.png'
import user2 from '../../assets/Icons/user-2.png'
import user3 from '../../assets/Icons/user-3.png'
import star4 from '../../assets/Icons/star4.png'
import star5 from '../../assets/Icons/star5.png'
import slide from '../../assets/Icons/slide.png'

const Testimonial = () => {
    return (
        <div className="mt-10 md:mt-40">
            <a className="btn text-[#020043] text-xs md:text-lg hover:bg-[#020043] hover:text-white font-medium border-[#020043] bg-transparent  rounded-3xl mb-4">Testimonial</a>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">What they say about us</h1>
            <div className='md:flex gap-8 '>
                {/* card-1 */}
                <div className="p-5 md:w-[400px] space-y-4 bg-[#FFFFF5] rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#020043]">Expertise and Compassion <br /> Combined</h3>
                    <p className="text-xs text-[#4D4C7B] mb-5 ">I cant thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className='flex gap-4'>

                        <div className="w-10 md:w-14 h-10 md:h-14 rounded-full">
                            <img src={user1} />
                        </div>

                        <div className='pt-2'>

                            <p className='text-xs mb-1'><span className='font-bold'>Sarah D, </span>IT Professional</p>
                            <img src={star5} alt="" />
                        </div>
                    </div>
                </div>
                {/* card-2 */}
                <div className="p-5 md:w-[400px]  space-y-4 bg-[#FFFFF5] rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#020043]">Life-Saving Care, Life-Changing Experience</h3>
                    <p className="text-xs text-[#4D4C7B]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    <div className='flex gap-4'>

                        <div className="w-10 md:w-14 h-10 md:h-14 rounded-full">
                            <img src={user2} />
                        </div>

                        <div className='pt-2'>

                            <p className='text-xs mb-1'><span className='font-bold'>Michael R, </span>Business Executive</p>
                            <img src={star4} alt="" />
                        </div>
                    </div>
                </div>
                {/* card-3 */}
                <div className="p-5 md:w-[400px] space-y-4 bg-[#FFFFF5] rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#020043]">A Partner in Health and
                        <br />  Wellness</h3>
                    <p className="text-xs text-[#4D4C7B]">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, theyve become my trusted partner in health and</p>
                    <div className='flex gap-4'>

                        <div className="w-10 md:w-14 h-10 md:h-14 rounded-full">
                            <img src={user3} />
                        </div>

                        <div className='pt-2'>

                            <p className='text-xs mb-1'><span className='font-bold'>David S, </span>Lawyer</p>
                            <img src={star5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-4'>
                <img src={slide} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;