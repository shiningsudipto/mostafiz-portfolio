import { useGetProjectByIdQuery } from "../redux/features/projects/projectsApi";
import { BsGithub } from "react-icons/bs";

const DaisyModal = ({ projectId }) => {
    const { data, isLoading } = useGetProjectByIdQuery(projectId);
    if (isLoading) {
        <span className="loading loading-infinity loading-lg"></span>
    }
    console.log(data)
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6">
                        <div className="w-full mb-4 lg-mb-0">
                            <img src={data?.imageLink} className="w-full" alt="" /> <br />
                            <a href={data?.githubLink} rel="noopener noreferrer" target="_blank" className="flex gap-2 hover:text-primaryColor" title="click me"><BsGithub className="text-2xl" />Github Link</a>
                        </div>
                        <div className="col-span-2 space-y-2">
                            <h2 className="text-3xl font-semibold">{data?.projectName}</h2>
                            <h4 className="text-lg font-semibold">Technology:</h4>
                            {data?.technology.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                            <h4 className="text-lg font-semibold">Key Features:</h4>
                            {data?.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                            <h4 className="text-lg font-semibold">Description:</h4>
                            <p>{data?.description}</p>
                            {
                                data?.architectureApproach?.length > 1 &&
                                <>
                                    <h4 className="text-lg font-semibold">Architecture Approach:</h4>
                                    <p>{data?.architectureApproach}</p>
                                </>
                            }
                            {
                                data?.pattern?.length > 1 &&
                                <>
                                    <h4 className="text-lg font-semibold">Design Pattern:</h4>
                                    <p>{data?.pattern}</p>
                                </>
                            }
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DaisyModal;