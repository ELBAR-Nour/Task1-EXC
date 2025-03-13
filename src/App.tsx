import './App.css'
import Home from './pages/Home'
import { Route,Routes } from 'react-router'
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import MainLayout from './layouts/Mainlayout'
import AuthLayout from './layouts/AuthLayout'
import Register from './pages/Register'
import Login from './pages/Login'


function App() {

  
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:idProd' element={<Productdetails/>}/>
        </Route>


        <Route path='auth' element={<AuthLayout/>}>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>

        <Route path='*' element={<h1 style={{backgroundColor:'Red',  height: '100vh'}}>Page not found 404</h1>}/>

      </Routes>
    </>
  )
}

export default App
