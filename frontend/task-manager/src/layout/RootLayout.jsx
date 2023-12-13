import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Logo from "../components/img/logo.png"
import {useIsAuthenticated} from "react-auth-kit";
import {FaPowerOff} from "react-icons/fa";
import {RiLogoutBoxRFill} from "react-icons/ri";

const RootLayout = () => {
    const isAuth = useIsAuthenticated();

    const navigate = useNavigate();


    const logOut = () => {
        document.cookie = "_auth_state=logout";
        navigate("/");
        window.location.reload();
    }
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
                                <NavLink to="/tasks" className="nav-link text-black me-2 fw-bold">Tasks</NavLink>
                            </li>
                            {isAuth() ?
                                <>
                                    <li className="nav-item">
                                        <button data-bs-toggle="modal"
                                                data-bs-target="#logout"
                                                className="nav-link text-black fw-bold">LogOut</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link text-black fw-bold">Log in</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/signup" className="nav-link text-black fw-bold">Sign up</NavLink>
                                    </li>
                                </>
                            }
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

            <div className="modal fade" id="logout" tabIndex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header position-relative">
                            <h1 className="modal-title fs-5 position-absolute top-50 start-50 translate-middle" id="exampleModalLabel">Verify Logout</h1>
                            <button type="button" className="btn-close d-flex align-content-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">Are you sure you want to log out? You may lose unsaved progress. </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button onClick={logOut} type="button" style={{backgroundColor:"antiquewhite",borderColor:"white"}}
                                    data-bs-dismiss="modal">Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default RootLayout;