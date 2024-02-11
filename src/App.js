import NavBar from './Components/Navbar';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import { Routes} from 'react-router';
import Signup from './Components/Signup';
import AboutUs from './Components/AboutUs';
import TandC from './Components/TandC';
import BelowBar from './Components/BelowBar';
import HomeScreen from './Components/Screens/HomeScreen';
import CartScreen from './Components/Screens/CartScreen';
import RegisterScreen from './Components/Screens/RegisterScreen';
import LoginScreen from './Components/Screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
    
   
     <NavBar/>
     <BelowBar/>

 
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/TandC' element={<TandC/>}/>
      <Route path='/cart' element={<CartScreen/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
