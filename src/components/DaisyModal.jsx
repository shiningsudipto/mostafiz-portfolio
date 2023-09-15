import { useGetProjectByIdQuery } from "../redux/features/projects/projectsApi";
import { BsGithub } from "react-icons/bs";

const DaisyModal = ({ projectId }) => {
    const { data } = useGetProjectByIdQuery(projectId);
    console.log(data)
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <img src={data?.imageLink} className="w-full" alt="" /> <br />
                            <a href={data?.githubLink} target="_blank" className="flex gap-2"><BsGithub className="text-2xl" />Github Link</a>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold">{data?.projectName}</h2>
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
                                    <h4 className="text-lg font-semibold">Pattern:</h4>
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