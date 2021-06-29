import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./homepage"
import { Cal } from "./calendar"

function App() {
  return (
    <div className="appContainer">
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/calendar" component={Cal} />
        </BrowserRouter>
    </div>
  );
}

export default App;
