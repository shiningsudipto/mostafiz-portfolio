
const SingleProject = ({ project, setProjectId }) => {

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
            </div>
        </>
    );
};

export default SingleProject;