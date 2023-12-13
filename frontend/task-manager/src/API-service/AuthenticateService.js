import axios,{AxiosError} from "axios";

export const onSubmit = async (urlPath, setError, values, navigate,signIn) => {
    setError("");

    try {
        const response = await axios.post(
            "http://localhost:8080/task-manager/api/" + urlPath,
            values
        )

        signIn({
            token: response.data.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: {email: values.email},
        })
        navigate("/tasks");
    } catch (err) {
        if (err instanceof AxiosError) setError(err.response?.data.message);
        else if (err instanceof Error) setError(err.message);
    }
}