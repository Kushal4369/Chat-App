import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';



import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)
  
  

  return (
    <>
      <div className= 'p-6 h-screen flex item justify-center'>
        <Routes>
          <Route path='/' element={<Home/>} / >
          <Route path='/login' element={<Login/>} / >
          <Route path='/signup' element={<SignUp/>} / > 
        </Routes>
        <ToastContainer />
      </div>

    </>
  )
}

export default App
