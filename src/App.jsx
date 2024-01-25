
import { Route, Routes } from 'react-router-dom';

import Modal from './components/Modal.jsx';
import Nav from './components/Nav.jsx';
import { useUserContext } from './context/UserContext.jsx';
import Hero from './pages/Hero.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { Player } from './components/Player.jsx';
import Social from './pages/social.jsx';
import Search from './pages/Search.jsx';
import Library from './pages/Library.jsx';

function App() {
let {user, footer}=useUserContext();
console.log("ftr",footer);

  return (
    <>
   <div className='flex flex-col items-center'>
 <Nav/> 


   <Routes>
    
    <Route path='/' element={<Hero/>}/>
    
     <Route path='/social' element={ <Social/>}/>
     <Route path='/search' element={<Search/>}/>
     <Route path='/library' element={<Library/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes> 
      
     </div>
    </>
  )
}

export default App
