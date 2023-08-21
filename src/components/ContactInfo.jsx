import locImg from "../assets/contact/location-icon.png"
import emailImg from "../assets/contact/message-icon.png"
import phImg from "../assets/contact/phone-icon.png"
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const ContactInfo = () => {
    return (
        <div className="bg-secondaryColor py-14 px-10 rounded-3xl">
            <div className="text-white space-y-6">
                <div className="flex items-center contactInfo-details gap-6">
                    <MdOutlineLocationOn className="contactIcon" />
                    <div>
                        <h4 className="text-xl font-bold font-Josefin">Address:</h4>
                        <p>121 King Street Melbourne, 3000, Australia</p>
                    </div>
                </div>
                <div className="flex items-center contactInfo-details gap-6">
                    <AiOutlineMail className="contactIcon" />
                    <div>
                        <h4 className="text-xl font-bold font-Josefin">Email:</h4>
                        <p>Info@folioflix.com</p>
                    </div>
                </div>
                <div className="flex items-center contactInfo-details gap-6">
                    <FiPhone className="contactIcon" />
                    <div>
                        <h4 className="text-xl font-bold font-Josefin">Phone:</h4>
                        <p>+61 3 8376 6284</p>
                        <h4 className="text-xl font-bold font-Josefin">WhatsApp:</h4>
                        <p>+800 2345 6789</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactInfo;