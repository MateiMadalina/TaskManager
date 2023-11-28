import {NavLink, Outlet} from "react-router-dom";
import Logo from "../components/img/logo.png"

const RootLayout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-opacity-100 sticky-top text-white h-auto" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink to="/">
                        <img height={38} className="ps-2" src={Logo} alt="logo"/>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/tasks" className="nav-link text-black me-2">Tasks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="btn btn-outline-dark me-2">Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="btn btn-dark text-white me-2">Sign up</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="root-layout " style={{minHeight: "91.5vh"}}>
                <header>
                </header>
                <main id="main" className="">
                    <Outlet/>
                </main>
            </div>
        </>

    );
}

export default RootLayout;