import Modal from "./Modal";
import { useState } from 'react';

const BlogAddingModal = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
        imageLink: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form Data:', formData);
        setIsOpen(!isOpen);
    };

    return (
        <Modal
            title={"Add A Blog"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="bg-gray-100 p-4 flex justify-center items-center">
                <div className="rounded-lg w-96">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-600 text-sm font-medium mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter title"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-600 text-sm font-medium mb-2">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter description"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="link" className="block text-gray-600 text-sm font-medium mb-2">Link</label>
                            <input
                                type="text"
                                id="link"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter link"
                            />
                        </div>
                        {/* Add the image link field */}
                        <div className="mb-4">
                            <label htmlFor="imageLink" className="block text-gray-600 text-sm font-medium mb-2">Image Link</label>
                            <input
                                type="text"
                                id="imageLink"
                                name="imageLink"
                                value={formData.imageLink}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter image link"
                            />
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default BlogAddingModal;
