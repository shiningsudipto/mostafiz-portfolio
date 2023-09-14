import { useState } from "react";
import Modal from "./Modal";
import { TagsInput } from "react-tag-input-component";
import { useAddProjectMutation } from "../redux/features/projects/projectsApi";

const ProjectAddingModal = ({ addProject: isOpen, setAddProject: setIsOpen }) => {
    const [selectedTechnology, setSelectedTechnology] = useState([]); // Separate state for technology
    const [selectedKeyFeatures, setSelectedKeyFeatures] = useState([]); // Separate state for key features

    const [addProject, { data, error }] = useAddProjectMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const projectName = form.projectName.value;
        // const technology = form.technology.value;
        const appPattern = form.appPattern.value;
        const architectureApproach = form.ArchitectureApproach.value;
        const description = form.description.value;
        // const keyFeatures = form.keyFeatures.value;
        const githubLink = form.githubLink.value;
        const imageLink = form.imageLink.value;
        const project = {
            projectName, technology: selectedTechnology, keyFeatures: selectedKeyFeatures, description, architectureApproach, pattern: appPattern, githubLink, imageLink
        }
        console.log(project);
        addProject(project);

        // form.reset();
        // setSelected([]);
        // setKeyFeatures([]);
    };

    return (
        <Modal
            title={"Add A Project"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="w-full mx-auto p-4">
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
                    <div>
                        <label htmlFor="technology" className="block text-gray-700 text-sm font-bold mb-2">
                            Technology
                        </label>
                        {
                            selectedTechnology.length !== 0 &&
                            <pre>{JSON.stringify(selectedTechnology)}</pre>
                        }
                        <TagsInput
                            value={selectedTechnology}
                            onChange={setSelectedTechnology}
                            name="technologies"
                            placeHolder="enter technology"
                        />
                    </div>
                    {/* <div className="mb-4">
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
                    </div> */}
                    <div className="mb-4">
                        <label htmlFor="appPattern" className="block text-gray-700 text-sm font-bold mb-2">
                            Pattern
                        </label>
                        <textarea
                            type="text"
                            name="appPattern"
                            className="shadow textarea appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter project pattern"
                            defaultValue={""}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ArchitectureApproach" className="block text-gray-700 text-sm font-bold mb-2">
                            Architecture Approach
                        </label>
                        <textarea
                            type="text"
                            name="architectureApproach"
                            className="shadow textarea appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter project architecture approach"
                            defaultValue={""}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="keyFeatures" className="block text-gray-700 text-sm font-bold mb-2">
                            Key Features
                        </label>
                        {
                            selectedKeyFeatures.length !== 0 &&
                            <pre>{JSON.stringify(selectedKeyFeatures)}</pre>
                        }
                        <TagsInput
                            value={selectedKeyFeatures}
                            onChange={setSelectedKeyFeatures}
                            name="keyFeatures"
                            placeHolder="enter key features"
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