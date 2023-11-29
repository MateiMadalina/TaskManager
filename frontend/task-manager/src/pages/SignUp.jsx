import FormInput from "../components/FormInput";
import {useState} from "react";

const SignUp = () => {
    const [error, setError] = useState("");
    const onSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const authenticateData = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password"),
        };
    }
    return(
        <form onSubmit={onSave} className="d-flex justify-content-center " style={{paddingTop: "3em"}}>
            <div className="col-10 col-md-8 col-lg-6 col-xl-4 card rounded-4" style={{borderColor:"burlywood"}}>
                <div className="card-body p-lg-5 p-xl-5 p-md-5 text-center">
                    <h3 className="mb-5" style={{color:"saddlebrown"}}>Sign up</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <FormInput content="First name" type="text" name="firstname"/>
                        </div>
                        <div className="col-md-6">
                            <FormInput content="Last name" type="text" name="lastname"/>
                        </div>
                    </div>

                    <FormInput content="Email" type="email" name="email"/>
                    <FormInput content="Password" type="password" name="password"/>

                    <p className="text-danger" hidden={error === ""}>Email is already in use !</p>

                    <button className="btn btn-lg btn-block" style={{backgroundColor:"burlywood"}} type="submit">SignUp</button>

                    <hr style={{color:"saddlebrown"}}/>

                    <p className="mt-5">
                        Have an account? <a href="/login" style={{color:"saddlebrown"}}>Log in</a>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default SignUp;