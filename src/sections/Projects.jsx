import { useState } from "react";
import SingleProject from "../components/SingleProject";
import { useGetProjectsQuery } from "../redux/features/projects/projectsApi";
import DaisyModal from "../components/DaisyModal";

const Projects = () => {
    const [projectId, setProjectId] = useState('');
    console.log(projectId)
    const { data } = useGetProjectsQuery();
    console.log(data)

    return (
        <div>

            <div className="container mx-auto">
                <div className='grid grid-cols-3 gap-6'>
                    {
                        data?.map((project) =>
                            <SingleProject
                                setProjectId={setProjectId}
                                key={project._id}
                                project={project}
                            ></SingleProject>
                        )
                    }
                </div>
            </div>
            <DaisyModal
                projectId={projectId}
            ></DaisyModal>
        </div>
    );
};

export default Projects;