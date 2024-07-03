import logo from '../../assets/Images/logo light.png'
import social from '../../assets/Icons/social.png'

const Footer = () => {
    return (
        <div className="bg-[#020043] mt-40">
            <footer className="footer  p-10 max-w-6xl mx-auto  text-[#FFFFF5]">
                <aside>
                    <img src={logo} alt="" />

                    <p className="mt-4 text-base">123 Main Street Anytown, USA
                        <br />
                        Postal Code: 12345
                        <br />
                        <br />
                        Support: support@oyolloo.com
                        <br />
                        (Available : 10:00am to 07:00pm)</p>
                </aside>
                <nav className='md:mt-16'>

                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms And Conditions</a>
                </nav>
                <nav className='md:mt-16'>
                    <a className="link link-hover">Services
                    </a>
                    <a className="link link-hover">Scheduling
                    </a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>

                </nav>
                <nav className='md:mt-16'>
                    <h6 className="">Follow Us</h6>
                    <div>
                        <img src={social} alt="" />
                        <br />
                        <p>@docplus 2024</p>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;