import { TypeAnimation } from "react-type-animation";
import NavigationBar from "../components/NavigationBar";
import Socials from "../components/Socials";

const Banner = () => {
    return (
        <div className="bg-[#EFF6FF] h-screen">
            <div className="container mx-auto">
                {/* Navbar */}
                <NavigationBar />

                <div className="grid lg:grid-cols-2">
                    <div className="font-Josefin mt-12">
                        <div>
                            <h3 className="text-5xl text-titleColor font-semibold">Hello, I Am</h3>
                            {/* <h1 className="text-7xl text-secondaryColor font-semibold">Mostafejur Rahman</h1> */}
                            <h1 className="text-[32px] h-[180px] text-secondaryColor font-semibold">
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
                        </div>
                        <div className="flex items-center gap-8 text-titleColor">
                            <button className="primaryBtn">Hire ME</button>
                            <p className="border-transition text-primaryColor hover:text-secondaryColor font-semibold text-lg">See My Work</p>
                        </div>
                        {/* <Socials align={"flex flex-col space-y-4"} /> */}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;