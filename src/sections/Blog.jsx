import img1 from "../assets/blog/blog-img-1.png"
import img2 from "../assets/blog/blog-img-2.png"
import img3 from "../assets/blog/blog-img-3.png"
import SectionTitle from "../components/SectionTitle";
import SingleBlog from "../components/SingleBlog";
import { useGetBlogsQuery } from "../redux/features/blogs/blogsApi";
const Blog = () => {

    const { data: blogs } = useGetBlogsQuery();

    // const blogs = [
    //     {
    //         author: 'Mostafezur Rahman',
    //         date: 'Mar 8, 2023',
    //         title: 'Mastering UI Design in Flutter Apps',
    //         description: 'Learn how to create stunning user interfaces for your Flutter apps. This blog covers essential UI design principles, Flutter\'s powerful widget system, and tips for creating responsive layouts.',
    //         img: '',
    //         link: 'link-to-blog-post-1'
    //     },
    //     {
    //         author: 'Mostafezur Rahman',
    //         date: 'Mar 8, 2023',
    //         title: 'State Management Made Easy with Flutter and Provider',
    //         description: 'Explore efficient state management in Flutter using the Provider package. This blog walks you through setting up Provider, managing app state, and avoiding common state-related pitfalls.',
    //         img: img2,
    //         link: 'link-to-blog-post-2'
    //     },
    //     {
    //         author: 'Mostafezur Rahman',
    //         date: 'Mar 8, 2023',
    //         title: 'Building a RESTful API-Driven Flutter App',
    //         description: 'Learn how to create a Flutter app that interacts with a RESTful API. This blog covers making HTTP requests, parsing JSON data, and displaying dynamic content in your app.',
    //         img: img3,
    //         link: 'link-to-blog-post-3'
    //     }
    // ]

    return (
        <div className="bg-[#F2F2FF] py-20">
            <div className="container mx-auto">
                <SectionTitle
                    title={"Latest News"}
                    subTitle={"Blog & Articles"}
                ></SectionTitle>

                <div className="lg:flex lg:justify-evenly lg:gap-10 gap-6 lg:p-0 px-4">
                    {
                        blogs?.map(blog => <SingleBlog key={blog.title} blog={blog}></SingleBlog>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Blog;