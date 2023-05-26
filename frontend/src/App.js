import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={< Home/>} />
    <Route path='/' element={<Login/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
