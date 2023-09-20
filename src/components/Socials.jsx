import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
const Socials = ({ align }) => {
    return (
        <div className={`${align} ${!align && "flex space-x-3 mb-6"}`}>
            <a href="https://github.com/mostafejur21" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full w-[40px]">
                <FaGithub className="text-2xl cursor-pointer text-black" />
            </a>
            <a href="https://www.linkedin.com/in/mostafejur21/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full w-[40px]">
                <FaLinkedinIn className="text-2xl cursor-pointer text-[#0A66C1]" />
            </a>
            <a href="https://www.facebook.com/roughelephent" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full w-[40px]">
                <FaFacebook className="text-2xl cursor-pointer text-[#14A0F8]" />
            </a>
        </div>
    );
};

export default Socials;