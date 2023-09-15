import { useState } from "react";
import SingleProject from "../components/SingleProject";
import { useGetProjectsQuery } from "../redux/features/projects/projectsApi";
import DaisyModal from "../components/DaisyModal";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
    const [projectId, setProjectId] = useState('');
    console.log(projectId)
    const { data } = useGetProjectsQuery();
    console.log(data)

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto">

                <SectionTitle
                    subTitle={"Check My Portfolio"}
                    title={"Creative Works"}
                ></SectionTitle>

                <div className='grid lg:grid-cols-3 grid-cols-1 lg:p-0 px-4 gap-6'>
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