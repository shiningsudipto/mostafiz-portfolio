import { FaRegEdit } from "react-icons/fa";
import UpdateProject from "./UpdateProject";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const SingleProject = ({ project, setProjectId }) => {

    let [isOpen, setIsOpen] = useState(false);

    const { user } = useContext(AuthContext);
    console.log(user)
    const userEmail = user?.email;
    const adminEmail = userEmail === import.meta.env.VITE_ADMINEMAIL1 && import.meta.env.VITE_ADMINEMAIL2;

    return (
        <>
            <div>
                <label
                    className="cursor-pointer"
                    title="click for details"
                    onClick={() => setProjectId(project?._id)}
                    htmlFor="my_modal_6">
                    <img className="w-full projectImg hover:rounded-3xl" src={project?.imageLink} alt="" />
                </label>
                {
                    adminEmail && <>
                        <button>
                            <FaRegEdit className="mt-4" onClick={() => setIsOpen(!isOpen)}>
                            </FaRegEdit>
                        </button>
                    </>
                }
            </div>
            <UpdateProject
                data={project}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            ></UpdateProject>
        </>
    );
};

export default SingleProject;