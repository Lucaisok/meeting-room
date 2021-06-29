import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "./login";
import { Cal } from "./calendar";
import { Register } from "./register";

function App() {
    return (
        <div className="appContainer">
            <BrowserRouter>
                <Route exact path="/" component={Login} />
                <Route path="/calendar" component={Cal} />
                <Route path="/register" component={Register} />
            </BrowserRouter>
        </div>
    );
}

export default App;
