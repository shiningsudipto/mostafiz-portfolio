import { Link } from "react-scroll";
import Socials from "../components/Socials";
import rImage from "../assets/portfolio-right-img.png"
import lImage from "../assets/portfolio-left-img.png"

const Footer = () => {
    return (
        <div className="text-center p-8 bg-[#211E39] relative">
            <img className="absolute right-0 bottom-0" src={rImage} alt="" />
            <img className="absolute top-0 left-0" src={lImage} alt="" />
            <div>
                <div className="">
                    {/* Logo-Brand */}
                    <h2 className="text-5xl font-semibold my-4">Fiz</h2>
                    <div className="text-xl font-semibold my-6 lg:items-center lg:h-5 flex lg:flex-row flex-col justify-center">
                        <Link className="me-2 lg:pr-2 lg:border-r cursor-pointer footerMenu" to="home">Home</Link>
                        <Link className="me-2 lg:pr-2 lg:border-r cursor-pointer footerMenu" to="services">Services</Link>
                        <Link className="me-2 lg:pr-2 lg:border-r cursor-pointer footerMenu" to="about">About</Link>
                        <Link className="me-2 lg:pr-2 lg:border-r cursor-pointer footerMenu" to="portfolio">Portfolio</Link>
                        <Link className="me-2 lg:pr-2 lg:border-r cursor-pointer footerMenu" to="blog">Blog</Link>
                        <Link className="me-2 cursor-pointer footerMenu" to="contact">Contact</Link>
                    </div>
                    <div className="">
                        <Socials align={"flex justify-center my-5 space-x-4"} />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="p-4">
                    <p>Copyright &copy; 2023 | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;