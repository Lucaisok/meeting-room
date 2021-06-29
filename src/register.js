import { Link } from "react-router-dom";
import { useStatefulFields } from "./hooks/useStatefulFields";
import { useAuthSubmit } from "./hooks/useAuthSubmit";

export function Register() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/register", values);

    return (
        <div className="loginContainer">
            <h1 className="text">Zimmerbelegung</h1>
            <div className="logFieldContainer">
                {error && (
                    <p className="error">
                        Something went wrong, please try again
                    </p>
                )}
                <div className="labelAndInput">
                    <label htmlFor="">Zimmer</label>
                    <input type="text" onChange={handleChange} />
                </div>
                <div className="labelAndInput">
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={handleChange} />
                </div>
                <div className="labelAndInput">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" onChange={handleChange} />
                </div>
                <button onClick={handleClick}>Register</button>
            </div>
            <Link to={"/"}>
                <p>Already registered? Login!</p>
            </Link>
        </div>
    );
}
