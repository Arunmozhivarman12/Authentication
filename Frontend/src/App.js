
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login';
import Signup from './signup';
import Nopage from './Nopage';
import Proute from './proute';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
       <Route path='/Login' element={<Login/>}></Route>
       <Route path='/proute' element={<Proute/>}></Route>
       <Route path='*' element={<Nopage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
