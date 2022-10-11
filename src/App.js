import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
