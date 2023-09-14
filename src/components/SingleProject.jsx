
const SingleProject = ({ project, setProjectId }) => {

    return (
        <>
            <div>
                <img className="w-full projectImg hover:rounded-3xl" src={project?.imageLink} alt="" />
                <label
                    onClick={() => setProjectId(project?._id)}
                    htmlFor="my_modal_6" className="btn">open modal</label>
            </div>
        </>
    );
};

export default SingleProject;