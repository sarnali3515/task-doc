import { RiArrowRightUpLine } from "react-icons/ri";
import logo from '../../assets/Images/logo dark.png'

const Navbar = () => {
    const navLists = <>
        <li className="text-base hover:underline text-[#020043]"><a >Home</a></li>
        <li className="text-base hover:underline text-[#020043]"><a >Services</a></li>

        <li className="text-base hover:underline text-[#020043]"><a >Blog</a></li>
        <li className="text-base hover:underline text-[#020043]"><a >About Us</a></li>
    </>

    return (
        <div>
            <div className="navbar mt-2 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLists}
                        </ul>
                    </div>
                    <a className="btn btn-ghost"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLists}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-[#020043] text-xs md:text-lg hover:bg-[#020043] hover:text-white font-medium border-[#020043] bg-transparent  rounded-xl">Appointment <RiArrowRightUpLine></RiArrowRightUpLine></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;