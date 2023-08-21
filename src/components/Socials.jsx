import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
const Socials = ({ align }) => {
    return (
        <div className={`${align}`}>
            <a href="" className="bg-white p-2 rounded-full w-[40px]">
                <FaGithub className="text-2xl cursor-pointer text-black" />
            </a>
            <a href="" className="bg-white p-2 rounded-full w-[40px]">
                <FaLinkedinIn className="text-2xl cursor-pointer text-[#0A66C1]" />
            </a>
            <a href="" className="bg-white p-2 rounded-full w-[40px]">
                <FaFacebook className="text-2xl cursor-pointer text-[#14A0F8]" />
            </a>
        </div>
    );
};

export default Socials;