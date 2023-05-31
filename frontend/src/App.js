import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Community from "./pages/Community";
import Skill from "./pages/Skill";
import Career from "./pages/Career";
import Personal from "./pages/Personal";
import Resourse from "./pages/Resourse";
import Tutorials from "./pages/Tutorials";
import Courses from "./pages/Courses";
import Roompage from "./components/room";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/career" element={<Career />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/resource" element={<Resourse/>} />
       <Route path="/tutorials" element={<Tutorials/>}/>
       <Route path="/course" element={<Courses/>}/>
     <Route path="/room/:roomId"  element={<Roompage/>} />
        </Routes>
        </Router>
  );
}

export default App;
