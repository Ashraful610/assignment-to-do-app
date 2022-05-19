import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
import AddTask from './Components/AddTask/AddTask';

function App() {
  return (
    <div >
         <Navbar></Navbar>
         <Routes>
            <Route path='/' element={<SignUp></SignUp>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/addTask' element={<AddTask></AddTask>}></Route>
         </Routes>
          <Toaster></Toaster>
    </div>
  );
}

export default App;
