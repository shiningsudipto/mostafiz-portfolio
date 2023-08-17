import { Link } from "react-scroll";

const NavigationBar = () => {

    const navLinks = <>
        <li> <Link href="#home">Home</Link> </li>
        <li> <Link href="#services">Services</Link> </li>
        <li> <Link href="#about">About</Link> </li>
        <li> <Link href="#portfolio">Portfolio</Link> </li>
        <li> <Link href="#blog">Blog</Link> </li>
    </>

    return (
        <div className="container mx-auto">
            <div className="navbar">
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
    );
};

export default NavigationBar;