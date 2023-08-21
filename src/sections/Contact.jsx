import ContactInfo from "../components/ContactInfo";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
    return (
        <div className="bg-white py-8">
            <div className="container mx-auto ">
                <SectionTitle
                    title={"Get in Touch"}
                    subTitle={"Any Question? Feel Free to COntact"}
                ></SectionTitle>
                <div className="grid grid-cols-3">
                    <div>
                        <ContactInfo />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;