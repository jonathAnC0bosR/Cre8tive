
import Login from "./components/Pages/Login/Login";
import Header from "./components/UI/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./components/Pages/Test-landing";
import Signup from "./components/Pages/Signup/Signup";
import Profile from "./components/Pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
