import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Ministry from './pages/ministries'
import AllComponents from './pages/AllComponents'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ministries' element={<Ministry />}></Route>
        <Route path='/all' element={<AllComponents />}></Route>
      </Routes>
    </div>
    
  )
}

export default App
