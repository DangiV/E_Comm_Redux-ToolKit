import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Cards from './components/Cards';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewMoreDetails from './components/ViewMoreDetails';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/ViewMoreDetails/:id' element={<ViewMoreDetails />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss
        pauseOnHover
      />

    </>
  )
}

export default App
