
const SingleBlog = ({ blog }) => {
    const { author, date, title, link, description, img } = blog;
    return (
        <div className="bg-white card lg:w-[400px] rounded-3xl overflow-hidden">
            <img src={img} className="w-full cardImage" alt="" />
            <div className="p-6">
                <div className="flex justify-between">
                    <p className="text-secondaryColor text-lg">Mostafejur Rahman</p>
                    <p>{date}</p>
                </div>
                <h2 className="text-titleColor text-2xl text-textColor font-bold py-4 borderAnimation hover:text-primaryColor">{title}</h2>
                <p className="text-xl">{description.slice(0, 100)}...</p>
                <a className="text-primaryColor font-semibold text-xl inline-block my-3 borderAnimation hover:text-secondaryColor" href={link}>Read More</a>
            </div>
        </div>
    );
};

export default SingleBlog;