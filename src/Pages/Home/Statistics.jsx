import stat1 from '../../assets/Icons/stat-1.png'
import stat2 from '../../assets/Icons/stat-2.png'
import stat3 from '../../assets/Icons/stat-3.png'
import stat4 from '../../assets/Icons/stat-4.png'
import stat5 from '../../assets/Icons/stat-5.png'
const Statistics = () => {
    return (
        <div className="mt-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-5 gap-5">
                {/* left */}
                <div className="bg-white text-[#020043] rounded-3xl border p-5 space-y-2 border-[#02144333]">
                    <h1 className="text-[40px] font-semibold ">90%</h1>
                    <p className='pb-3 text-sm pr-10'>
                        Patient satisfaction rate, reflecting our commitment.
                    </p>
                    <div className='flex justify-center'>
                        <img src={stat1} className='w-[130px]' alt="" />
                    </div>
                </div>
                {/* middle */}
                <div className="col-span-3">
                    <div>
                        <h1 className="text-5xl font-semibold text-center">Comprehensive Care<br />for Every Patient</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {/* middle-1 */}
                        <div className="bg-white text-[#020043] rounded-3xl border p-5 space-y-1 border-[#02144333]">
                            <h1 className="text-[40px] font-semibold ">500+</h1>
                            <p className=' text-sm'>
                                Board-certified <br /> doctors
                            </p>
                            <div className='flex justify-end'>
                                <img src={stat2} className='' alt="" />
                            </div>
                        </div>
                        {/* middle-2 */}
                        <div className='flex items-end'>
                            <div className="bg-white text-[#020043] rounded-3xl border p-5 space-y-1 border-[#02144333] h-40 w-full">
                                <h1 className="text-[40px] font-semibold ">4.8</h1>
                                <p className=' text-sm'>
                                    Over 20,000 Patient
                                </p>
                                <div className='flex justify-start'>
                                    <img src={stat3} className='' alt="" />
                                </div>
                            </div>
                        </div>
                        {/* middle-3 */}
                        <div className="bg-white text-[#020043] rounded-3xl border p-5 space-y-1 border-[#02144333]">
                            <h1 className="text-[40px] font-semibold ">$5000</h1>
                            <p className=' text-sm'>
                                Money spend <br />
                                for poor patient
                            </p>
                            <div className='flex justify-end'>
                                <img src={stat4} className='' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="bg-white text-[#020043] rounded-3xl border p-5 space-y-2 border-[#02144333]">
                    <h1 className="text-[40px] font-semibold ">50+</h1>
                    <p className='pb-8 text-sm pr-10'>
                        Free lession video <br /> for patient
                    </p>
                    <div className='flex justify-center'>
                        <img src={stat5} className='w-[130px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;