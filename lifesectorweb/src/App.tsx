import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Ministry from './pages/ministries'
import AllComponents from './pages/AllComponents'
import Services from './pages/our_services'
import Contact from './pages/contact_us'
import Gallery from './pages/gallery'
import MinistryTeam from './pages/ministry_team'


function App() {

  return (
    <div>
      <div>
        
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ministries' element={<Ministry />}></Route>
        <Route path='/all' element={<AllComponents />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact_us' element={<Contact />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/ministryteam' element={<MinistryTeam />}></Route>
      </Routes>
    </div>
    
  )
}

export default App
