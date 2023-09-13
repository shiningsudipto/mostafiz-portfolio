import { Link } from "react-scroll";
import { useState } from 'react'
import BlogAddingModal from "./BlogAddingModal";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ProjectAddingModal from "./ProjectAddingModal";
const NavigationBar = () => {
    let [isOpen, setIsOpen] = useState(false);
    let [addProject, setAddProject] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const userEmail = user?.email;
    const adminEmail = userEmail === import.meta.env.VITE_ADMINEMAIL1 && import.meta.env.VITE_ADMINEMAIL2;
    console.log(adminEmail);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                console.log('log out successfully');
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    const navLinks = <>
        <li> <Link to="#home">Home</Link> </li>
        {
            adminEmail && (
                <>
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <p>Add Blog</p>
                    </li>
                    <li onClick={() => setAddProject(!addProject)}>
                        <p>Add Project</p>
                    </li>
                    <li onClick={handleLogOut}> <p>Logout</p> </li>
                </>
            )
        }
        <li> <Link to="#services">Services</Link> </li>
        <li> <Link to="#about">About</Link> </li>
        <li> <Link to="#portfolio">Portfolio</Link> </li>
        <li> <Link to="#blog">Blog</Link> </li>
    </>

    return (
        <>
            <BlogAddingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            ></BlogAddingModal>
            <ProjectAddingModal
                addProject={addProject}
                setAddProject={setAddProject}
            ></ProjectAddingModal>
            <div className="">
                <div className="navbar pt-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <a className="normal-case text-xl">Fiz</a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal text-lg font-semibold text-titleColor px-1 font-Josefin">
                                {navLinks}
                            </ul>
                        </div>
                        <button className="primaryBtn ms-2">Contact</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default NavigationBar;