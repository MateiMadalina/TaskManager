import {useState} from "react";
import FormInput from "../components/FormInput";

const LogIn = () => {
    const [error, setError] = useState("");

    const onSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const authenticateData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };
    }
    return(
        <form onSubmit={onSave} className="d-flex justify-content-center mt-5" style={{paddingTop: "5em"}}>
            <div className="col-10 col-md-8 col-lg-6 col-xl-4 card rounded-4" style={{borderColor:"burlywood"}}>
                <div className="card-body p-lg-5 p-xl-5 p-md-5 text-center">
                    <h3 className="mb-5" style={{color:"saddlebrown"}}>Log in</h3>
                    <FormInput content="Email" type="email" name="email" />
                    <FormInput content="Password" type="password" name="password" />

                    <p className="text-danger" hidden={error === ""}>Email or password are invalid !</p>

                    <button className="btn btn-lg btn-block " style={{backgroundColor:"burlywood"}} type="submit">LogIn</button>

                    <hr style={{color:"saddlebrown"}}/>

                    <p className="mt-5">
                        Not a member yet? <a href="/signup" style={{color:"saddlebrown"}}>Sign up</a>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default LogIn;