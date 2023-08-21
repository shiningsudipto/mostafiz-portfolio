
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center font-Josefin">
            <h2 className="text-secondaryColor text-2xl font-semibold mt-14">{title}</h2>
            <h3 className="text-titleColor text-5xl font-bold w-[600px] mx-auto mb-10 mt-4">{subTitle}</h3>
        </div>
    );
};

export default SectionTitle;