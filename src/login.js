import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="landingPage">
            <div className="logo"></div>
            <h1 className="raumName">Raum 1</h1>
            <h2 className="freiOderBelegt">Frei</h2>
            <Link to={"/calendar"}>
                <button>Buchen</button>
            </Link>
            <div className="upcoming">
                <h3
                    style={{
                        color: "black",
                        textAlign: "left",
                        marginLeft: 10,
                        fontFamily: "sans-serif",
                    }}
                >
                    Bevorstehende Buchungen:
                </h3>
                <h4
                    style={{
                        color: "black",
                        textAlign: "left",
                        marginLeft: 10,
                        fontFamily: "sans-serif",
                    }}
                >
                    Don 01 Jul 2021 10:00 - 12:00 | Prototype Presentation |
                    Stephan K.
                </h4>
                <h4
                    style={{
                        color: "black",
                        textAlign: "left",
                        marginLeft: 10,
                        fontFamily: "sans-serif",
                    }}
                >
                    Fri 02 Jul 2021 13:00 - 14:00 | Meeting | Mona L.
                </h4>
            </div>
        </div>
        // <div className="loginContainer">
        //     <h1 className="text">Zimmerbelegung</h1>
        //     <div className="logFieldContainer">
        //         <div className="labelAndInput">
        //             <label htmlFor="">Zimmer</label>
        //             <input type="text" />
        //         </div>
        //         <div className="labelAndInput">
        //             <label htmlFor="">Password</label>
        //             <input type="password" />
        //         </div>
        //         <button>Login</button>
        //     </div>
        //     <Link to={"/register"}>
        //         <p>Register a new room</p>
        //     </Link>
        // </div>
    );
}
