import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import Resourse from './pages/Resourse';
import Skill from './pages/Skill';
import Career from './pages/Career';
import Personal from './pages/Personal';



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={< Home/>} />
    <Route path='/' element={<Login/>} />
    <Route path='/community' element={<Community/>} />
    <Route path='/resource' element={<Resourse/>} />
    <Route path='/skills' element={<Skill/>} />
    <Route path='/career' element={<Career/>} />
    <Route path='/personal' element={<Personal/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
