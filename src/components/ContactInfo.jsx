
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const ContactInfo = () => {
    return (
        <div className="bg-secondaryColor w-full py-14 px-10 rounded-3xl">
            <div className="text-white space-y-6">
                <div className="flex items-center contactInfo-details gap-6">
                    <MdOutlineLocationOn className="contactIcon w-16 border-2 border-transparent" />
                    <div>
                        <h4 className="text-xl font-bold font-Josefin">Address:</h4>
                        <p>Uttara, Dhaka, Bangladesh.</p>
                    </div>
                </div>
                <div className="flex items-center contactInfo-details gap-6">
                    <div>
                        <AiOutlineMail className="contactIcon" />
                    </div>
                    <div>
                        <h4 className=" text-xl font-bold font-Josefin">Email:</h4>
                        <p>info.mostafejur21@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center contactInfo-details gap-6">
                    <FiPhone className="contactIcon" />
                    <div>
                        <h4 className="text-xl font-bold font-Josefin">Phone:</h4>
                        <p>+880 1828-649383</p>
                        <h4 className="text-xl font-bold font-Josefin">WhatsApp:</h4>
                        <p>+880 1828-649383</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactInfo;