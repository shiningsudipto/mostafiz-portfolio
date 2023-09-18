import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
    return (
        <div id="#contact" className="bg-white py-20">
            <div className="container mx-auto ">
                <SectionTitle
                    title={"Get in Touch"}
                    subTitle={"Any Question? Feel Free to Contact"}
                ></SectionTitle>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-32 gap-10 lg:p-0 px-4">
                    <div>
                        <ContactInfo />
                    </div>
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;