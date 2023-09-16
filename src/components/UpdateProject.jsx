import { TagsInput } from "react-tag-input-component";
import Modal from "./Modal";
import { useState } from "react";
import { useUpdateProjectMutation } from "../redux/features/projects/projectsApi";

const UpdateProject = ({ isOpen, setIsOpen, data }) => {
    const [selectedTechnology, setSelectedTechnology] = useState(data?.technology);
    const [selectedKeyFeatures, setSelectedKeyFeatures] = useState(data?.keyFeatures);

    const [UpdateProject, { error }] = useUpdateProjectMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const projectName = form.projectName.value;
        const appPattern = form.appPattern.value;
        const architectureApproach = form.architectureApproach.value;
        const description = form.description.value;
        const githubLink = form.githubLink.value;
        const imageLink = form.imageLink.value;
        const project = {
            projectName, technology: selectedTechnology, keyFeatures: selectedKeyFeatures, description, architectureApproach, pattern: appPattern, githubLink, imageLink
        }
        console.log(project);

        const updateProjectInfo = {
            id: data?._id,
            project,
        }

        UpdateProject(updateProjectInfo);
        setIsOpen(!isOpen);
    };

    console.log(error);

    return (
        <Modal
            title={`Update ${data?.projectName}`}
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
                            defaultValue={data?.projectName}
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
                            defaultValue={data?.technology}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="appPattern" className="block text-gray-700 text-sm font-bold mb-2">
                            Pattern
                        </label>
                        <textarea
                            type="text"
                            name="appPattern"
                            className="shadow textarea appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter project pattern"
                            defaultValue={data?.appPattern}
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
                            defaultValue={data?.architectureApproach}
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
                        // defaultValue={data?.keyFeatures}
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
                            defaultValue={data?.description}
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
                            defaultValue={data?.githubLink}
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
                            defaultValue={data?.imageLink}
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

export default UpdateProject;