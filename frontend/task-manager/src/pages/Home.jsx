import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="home-overlay"></div>
            <div className="home-text">
                <h1>Your Task Manager</h1>
                <h5>Organize your day, stay productive, and accomplish your goals with our task management app. Easily create, manage, and track your tasks for a more efficient and organized life.</h5>
                <button onClick={() => navigate("/login")} className="explore-button">Get Started</button>
            </div>
        </div>
    );

}

export default Home