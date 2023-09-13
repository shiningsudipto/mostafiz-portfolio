import Modal from "./Modal";

const ProjectAddingModal = ({ addProject: isOpen, setAddProject: setIsOpen }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const projectName = form.projectName.value;
        const technology = form.technology.value;
        const description = form.description.value;
        const keyFeatures = form.keyFeatures.value;
        const githubLink = form.githubLink.value;
        const imageLink = form.imageLink.value;
        const project = {
            projectName, technology, keyFeatures, description, githubLink, imageLink
        }
        console.log(project);
        form.reset();
    };

    return (
        <Modal
            title={"Add A Project"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="w-full max-w-md mx-auto p-4">
                <form onSubmit={handleSubmit} className="bg-white rounded ">
                    <div className="mb-4">
                        <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">
                            Project Name
                        </label>
                        <input
                            type="text"
                            name="projectName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter project name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="technology" className="block text-gray-700 text-sm font-bold mb-2">
                            Technology
                        </label>
                        <input
                            type="text"
                            name="technology"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter technology"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="keyFeatures" className="block text-gray-700 text-sm font-bold mb-2">
                            key Features
                        </label>
                        <textarea
                            type="text"
                            name="keyFeatures"
                            className="shadow textarea appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter project keyFeatures"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            type="text"
                            name="description"
                            className="shadow textarea appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter project description"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="githubLink" className="block text-gray-700 text-sm font-bold mb-2">
                            Github Link
                        </label>
                        <input
                            type="text"
                            name="githubLink"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter Github link"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageLink" className="block text-gray-700 text-sm font-bold mb-2">
                            Image Link
                        </label>
                        <input
                            type="text"
                            name="imageLink"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter image link"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ProjectAddingModal;