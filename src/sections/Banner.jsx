import { TypeAnimation } from "react-type-animation";
import NavigationBar from "../components/NavigationBar";
import Socials from "../components/Socials";
import avatar from '../assets/mf.png'
import { Link } from "react-scroll";

const Banner = () => {
    return (
        <div id="#home" className="bg-[#EFF6FF] h-screen">
            <div className="container mx-auto">
                {/* Navbar */}
                <NavigationBar />

                <div className="grid lg:grid-cols-2 lg:px-0 px-4 lg:pt-36 pt-16 lg:w-auto w-[390px]">
                    <div className="font-Josefin mt-12 ">
                        <div className="">
                            <h3 className="lg:text-5xl text-2xl text-titleColor font-semibold">Hello, I Am</h3>
                            {/* <h1 className="text-7xl text-secondaryColor font-semibold">Mostafejur Rahman</h1> */}
                            <h1 className="lg:text-[32px] text-[18px] lg:h-auto h-[80px] text-secondaryColor font-semibold">
                                <TypeAnimation
                                    sequence={[
                                        'Mostafejur Rahman',
                                        2000,
                                        'Flutter developer',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '2em', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </h1>
                            <h4 className="font-Lato text-2xl text-textColor mb-10">
                                "Passionate Flutter dev crafting seamless apps with innovation. Coding with purpose to enhance user experiences."</h4>
                            <div className="">
                                <Socials align={""} />
                            </div>
                        </div>
                        <div className="flex items-center gap-8 text-titleColor">
                            <Link smooth={true} to="#contact" className="primaryBtn">Hire ME</Link>
                            <Link smooth={true} to="#portfolio" className="border-secondaryColor border-transition text-secondaryColor hover:text-primaryColor font-semibold text-lg">See My Work</Link>
                        </div>

                    </div>
                    <div className="">
                        <div className="content-container">
                            <div className="profile-image-container">
                                <img className="h-[500px]" src={avatar} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;